// @flow
import gulp from 'gulp'
import gutil from 'gulp-util'
import runSequence from 'run-sequence'
import del from 'del'
import combine from 'stream-combiner2'
import sass from 'gulp-sass'
import browserSync from 'browser-sync'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import merge from 'merge-stream'
import webpackstream from 'webpack-stream'
import path from 'path'
import url from 'url'

import ansiHTML from './build/ansiHTML'

const bs = browserSync.create()

import fs from 'fs'
gulp.task('dev', () => {
  runSequence('del', 'copy', 'sass', 'serve')
})

gulp.task('deploy', () => {
  runSequence('del', 'webpack', 'copy', 'sass')
})

gulp.task('webpack', () => {
  const task = combine.obj([
    gulp.src('src/entry.jsx'),
    webpackstream(require('./webpack.config.prod.js'), webpack),
    gulp.dest('site')])
  return task.on('error', handleError)
})

const compiledFolder = path.join(__dirname, 'site')
const defaultFile = '/index.html'

function spaMiddleWare (req, res, next) {
  let fileName = url.parse(req.url)

  fileName = fileName.href.split(fileName.search).join('')
  const fileExists = fs.existsSync(`${compiledFolder}${fileName}`)
  if (!fileExists && fileName.indexOf('browser-sync-client') < 0) {
    req.url = defaultFile
  }
  return next()
}

let webPackerror = ''

function errorMiddlWare (req, res, next) {
  if (req.url === '/bs-error-react') {
    res.end(webPackerror)
  } else {
    next()
  }
}

function reporter (reporterOptions) {
  const { state, stats, options } = reporterOptions
  if (state) {
    var displayStats = (!options.quiet && options.stats !== false)
    if (displayStats && !(stats.hasErrors() || stats.hasWarnings()) && options.noInfo) {
      displayStats = false
    }
    if (displayStats) {
      options.log(stats.toString(options.stats))
    }
    if (!options.noInfo && !options.quiet) {
      var msg = 'Compiled successfully.'
      if (stats.hasErrors()) {
        msg = 'Failed to compile.'
      } else if (stats.hasWarnings()) {
        msg = 'Compiled with warnings.'
      }
      options.log('webpack: ' + msg)
    }
  } else {
    options.log('webpack: Compiling...')
  }

  if (stats.hasErrors()) {
    webPackerror = ansiHTML(stats.toString(options.stats))
  } else {
    webPackerror = ''
  }
}

gulp.task('serve', done => {
  const bundler = webpack(require('./webpack.config.js'))

  const webpackDevMiddlewareInstance = webpackDevMiddleware(bundler, {
    noInfo: true,
    reporter
  })
  bs.init({
    server: {
      baseDir: 'site',
      index: 'index.html',
      middleware: [errorMiddlWare, webpackDevMiddlewareInstance, spaMiddleWare]
    },
    ui: {
      port: 7001
    },
    port: 7000,
    open: process.env.NODE_FIRST === true,
    browser: 'Google Chrome Canary'
  })

  webpackDevMiddlewareInstance.waitUntilValid(() => {
    gulp.watch('styles/**/*.scss', ['sass'])
    gulp.watch(['assets/**/*', 'index.html'], ['copy'])
    bundler.plugin('done', () => {
      bs.reload()
    })
    done()
  })
})

gulp.task('sass', () => {
  const task = combine.obj([
    gulp.src('styles/**/*.scss'),
    sass(),
    gulp.dest('site'),
    bs.stream()
  ])

  return task.on('error', handleError)
})

gulp.task('del', done => {
  del(['site', 'libdefs.js']).then(() => done())
})

gulp.task('copy', () => {
  const taskSite = combine.obj([
    gulp.src('index.html'),
    gulp.dest('site'),
    bs.stream()
  ])

  const taskAssest = combine.obj([
    gulp.src('assets/**/*'),
    gulp.dest('site'),
    bs.stream()
  ])

  return merge(taskSite, taskAssest).on('error', handleError)
})

function handleError (err) {
  gutil.log(gutil.colors.magenta(err.toString()))

  this.emit('end')
}
