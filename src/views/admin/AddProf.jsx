import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {CardTitle} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'

class AddProf extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clave: ''
    }
  }
  render () {
    return (
      <div className="container-form">
        <Paper zDepth={2} className="admin-content">
          <CardTitle className='container-header' title="Alta Profesor" />
          <div className='body-form'>
            <div className='section-form'>
              <TextField
                hintText="Nombre"
              />
              <TextField
                hintText="Nombre"
              />
            </div>
            <div className='section-form'>
              <TextField
                hintText="Apellido Paterno"
              />
              <TextField
                hintText="Apellido Materno"
              />
            </div>
            <div className='section-form'>
              <DatePicker hintText="fecha de nacimiento" />
            </div>
            <div className='section-button-form'>
              <RaisedButton className='button' label="Guardar" primary={true} onClick={() => { console.log('mucho') }} />
              <RaisedButton className='button' label="cancelar" onClick={() => { console.log('mucho') }} />
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

export default AddProf
