// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import { Router, Route, Switch, browserHistory, IndexRoute } from 'react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppBar from 'material-ui/AppBar'

import Login from './views/Login/Login'
import ListaAlumn from './views/admin/alumn/ListaAlumn'
import ListaProf from './views/admin/prof/ListaProf'

import AddProf from './views/admin/prof/AddProf'
import AddAlum from './views/admin/alumn/AddAlum'

import Root from './Root'
import WrapAdmin from './component/common/WrapAdmin'
injectTapEventPlugin()

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory} >
      <Route path="/" component={Login} />
      {/* <IndexRoute component={Login} /> */}
      <Route path="/admin" component={WrapAdmin} >
        <Route className="Login" path="/admin/Asistencia" component={ListaAlumn} />
        <Route className="Login" path="/admin/ListaProf" component={ListaProf} />
        <Route className="Login" exact path="/admin/altaProf" component={AddProf} />
        <Route className="Login" exact path="/admin/altaProf/alta" component={ListaProf} />
        <Route className="Login" exact path="/admin/altaAlum" component={AddAlum} />
        <Route className="Login" exact path="/admin/info" component={ListaProf} />
      </Route>
      <Route path="/a" component={Root} >
      <Route className="Login" path="/a/login" component={Login} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('app')
)
