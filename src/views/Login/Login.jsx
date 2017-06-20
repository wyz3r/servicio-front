import React from 'react'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import {CardTitle} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

// import axios from ‘axios’
import cookie from 'react-cookie'

const config = require('../../data/data.json')
// console.log(config)
// const configCommunity = window.location.host.split(‘.’)[0]

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      clave: ''
    }
    this.loginClick = this.loginClick.bind(this)
  }
  componentDidMount () {
    document.title = `Login`

    // window.scrollTo(0, 0)
  }
  handleNameChange = (event) => {
    // this.setState({ name: event.target.value })
  }

  loginClick () {
    // alert("hola mundo ")
    // console.log(this.state.value)
    const {clave} = this.state
    if (clave) {
      console.log(clave)
      window.location.href = '/admin'
    }
  }
  render () {
    const style = {
      marginLeft: 20
    }
    const {loginClick} = this
    return (
      <div className="login-home">
        <Paper zDepth={3} className="login-content">
          <CardTitle title="Iniciar Sesión" />
          <TextField maxLength="8" hintText="Clave Ulsa" style={style} underlineShow={true} onChange={event => this.setState({clave: event.target.value})} />
          <RaisedButton label="Entrar" primary={true} onClick={() => { loginClick() }} />
        </Paper>
      </div>
    )
  }
}

export default Login
