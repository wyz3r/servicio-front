// @flow

/* global fetch */

const displayError = msg => {
  const el = document.createElement('div')
  el.innerHTML = msg

  const overLay = document.createElement('div')
  overLay.style.position = 'fixed'
  overLay.style.boxSizing = 'border-box'
  overLay.style.left = '0px'
  overLay.style.top = '0px'
  overLay.style.right = '0px'
  overLay.style.bottom = '0px'
  overLay.style.width = '100vw'
  overLay.style.height = '100vh'
  overLay.style.backgroundColor = 'black'
  overLay.style.color = 'rgb(230, 230, 230)'
  overLay.style.fontFamily = 'Menlo, Consolas, monospace'
  overLay.style.fontSize = 'large'
  overLay.style.padding = '2rem'
  overLay.style.lineHeight = '1.2'
  overLay.style.whiteSpace = 'pre-wrap'
  overLay.style.overflow = 'auto'

  overLay.appendChild(el)

  if (document.body) {
    document.body.appendChild(overLay)
  }
}

const exec = (bs) => {
  fetch('/bs-error-react').then(res => res.text()).then(res => {
    if (res !== '') {
      displayError(res)
    }
  })
}

const poll = () => {
  if (window.___browserSync___ === undefined) {
    window.requestAnimationFrame(poll)
  } else {
    exec(window.___browserSync___)
  }
}

window.requestAnimationFrame(poll)
