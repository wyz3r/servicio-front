import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {CardTitle} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'

class AddAlum extends Component {
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
          <CardTitle className='container-header' title="Alta Alumno" />
          <div className='body-form'>
            <div className='section-form'>
              <TextField
                floatingLabelText="Nombre"
              />
              <TextField
                floatingLabelText="Nombre's"
              />
            </div>
            <div className='section-form'>
              <TextField
                floatingLabelText="Apellido Paterno"
              />
              <TextField
                floatingLabelText="Apellido Materno"
              />
            </div>
            <div className='section-form'>
              <TextField
                floatingLabelText="Apellido Paterno"
              />
              <TextField
                floatingLabelText="Apellido Materno"
              />
            </div>
            <div className='section-form'>
              <TextField
                floatingLabelText="Apellido Paterno"
              />
              <TextField
                floatingLabelText="Apellido Materno"
              />
            </div>
            <div className='section-form-date'>
              {/* <DatePicker className="date" hintText="fecha de nacimiento" /> */}
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

export default AddAlum
