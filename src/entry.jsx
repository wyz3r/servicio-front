// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import { Router, Route, Switch, browserHistory, IndexRoute } from 'react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppBar from 'material-ui/AppBar'

import Login from './views/Login/Login'
import Admin from './views/admin/Admin'

import Root from './Root'
injectTapEventPlugin()

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory} >
      <Route path="/" component={Login} />
      {/* <IndexRoute component={Login} /> */}
      <Route path="/admin" component={Root} >
        <Route className="Login" path="/admin/Asistencia" component={Login} />
        <Route className="Login" exact path="/admin/altaProf" component={Admin} />
        <Route className="Login" exact path="/admin/altaProf/alta" component={Admin} />
        <Route className="Login" exact path="/admin/altaAlum" component={Admin} />
        <Route className="Login" exact path="/admin/info" component={Admin} />
      </Route>
      <Route path="/a" component={Root} >
      <Route className="Login" path="/a/login" component={Login} />
      <Route className="Login" exact path="/a/admin" component={Admin} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('app')
)
