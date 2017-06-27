import React from 'react'
import { Link } from 'react-router'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import {CardTitle} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import SearchIcon from 'material-ui/svg-icons/action/search'

import config from '../../../data/alumnos.json'
console.log(config.data)
// import config from '../../data/data.json'
// import axios from ‘axios’
// import cookie from 'react-cookie'

// const configCommunity = window.location.host.split(‘.’)[0]
class ListaAlumn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.loginClick = this.loginClick.bind(this)
  }
  componentWillMount () {
    document.title = `Admin`
    // console.log(config)
    // window.scrollTo(0, 0)
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  loginClick () {
    // alert("hola mundo ")
    // console.log(this.state.value)
    const name = this.state.name
    if (name) {
      console.log(name)
    }
  }
  render () {
    const style = {
      marginLeft: 20
    }
    const {loginClick} = this
    return (
      <div className="list-home">
        <Paper zDepth={2} className="admin-content">
          <CardTitle title="Lista de Alumnos" />
          <div className='admin-actions'>
            <div className="button-content">
              <Link to="/admin/altaAlum" ><RaisedButton label="Alta" primary={true} /></Link>
            </div>
            <div className="search-content">
              <SearchIcon style={{marginBottom: '-10px'}}/><TextField hintText="Buscar" />
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

export default ListaAlumn
