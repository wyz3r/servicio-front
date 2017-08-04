import React from 'react'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import {CardTitle} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import config from '../../data/data.json'
import urls from '../../../config.json'
import axios from 'axios'

// import axios from ‘axios’
console.log(urls.devUrl)
import cookie from 'react-cookie'
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
      // console.log(clave)
      axios.post(urls.devUrl + 'consultatipo.php', {
        cve_ulsa: clave
      })
      .then(function (response) {
        console.log(response.data.login[0])
        if (response.data.login[0].user === '0') {
          window.location.href = '/admin'
        }
        else if (response.data.login[0].user === '1') {
          window.location.href = '/admin'
        }
        else {
          window.location.href = '/admin'
        }
      })
      .catch(function (error) {
        console.log(error)
      })
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
