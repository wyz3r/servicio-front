import React from 'react'
import { Link } from 'react-router'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import {CardTitle} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import SearchIcon from 'material-ui/svg-icons/action/search'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

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
      name: '',
      search: ''
    }
    this.loginClick = this.loginClick.bind(this)
    this.search = ''
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
  createTable (value) {
    console.log(value)
    if (value) {
      return (
        <TableBody>
          {/* {config.data.filter().map(() => {
          })} */}
        </TableBody>)
    }
    return (
      <TableBody displayRowCheckbox={false}>
        {config.data.map(({nombre, apellidoP, apellidoM, carrera, campus}, key) => {
          return (
          <TableRow key={key} >
            <TableRowColumn>{nombre}</TableRowColumn>
            <TableRowColumn>{apellidoP}</TableRowColumn>
            <TableRowColumn>{apellidoM}</TableRowColumn>
            <TableRowColumn>{carrera}</TableRowColumn>
            <TableRowColumn>{campus}</TableRowColumn>
          </TableRow>)
        })}
      </TableBody>
    )
  }
  render () {
    const style = {
      marginLeft: 20
    }
    const {search} = this.state
    return (
      <div className="list-home">
        <Paper zDepth={2} className="admin-content">
          <CardTitle title="Lista de Alumnos" />
          <div className='admin-actions'>
            <div className="button-content">
              <Link to="/admin/altaAlum" ><RaisedButton label="Alta" primary={true} /></Link>
            </div>
            <div className="search-content">
              <SearchIcon style={{marginBottom: '-10px'}}/><TextField hintText="Buscar" onChange={ event => this.setState({search: event.target.value}) } />
            </div>
          </div>
          <Table>
           <TableHeader displaySelectAll={false}
                    adjustForCheckbox={false} >
             <TableRow>
               <TableHeaderColumn>nombre</TableHeaderColumn>
               <TableHeaderColumn>apellidoP</TableHeaderColumn>
               <TableHeaderColumn>apellidoM</TableHeaderColumn>
               <TableHeaderColumn>carrera</TableHeaderColumn>
               <TableHeaderColumn>campus</TableHeaderColumn>
             </TableRow>
           </TableHeader>
          {this.createTable(search)}
         </Table>
        </Paper>
      </div>
    )
  }
}

export default ListaAlumn
