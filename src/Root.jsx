import React from 'react'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import School from 'material-ui/svg-icons/social/school'

function handleTouchTap () {
  alert('onTouchTap triggered on the title component')
}

class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: true
    }
  }
  render () {
    const {open} = this.state
    const style = {
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px'
    }
    const container = {
      display: 'block'
    }
    const menu = {
    }
    return (
      <div className='container' style={container}>
        <AppBar title={<span >Title</span>} onLeftIconButtonTouchTap={handleTouchTap} />
        <div className='body-content'>
        <Paper className="menu-side" style={open ? style : {width: '0', overflow: 'hidden'}}>
          {/* <AppBar title={<span >Title</span>} onTitleTouchTap={handleTouchTap} /> */}
          <Menu style={menu}>
            <Link to="/admin/Asistencia" ><MenuItem leftIcon={<PersonAdd />} primaryText="Asistencia" /></Link>
            <Link to="/admin/altaProf" ><MenuItem  leftIcon={<PersonAdd />} primaryText="Alta de Profesores" /></Link>
            <Link to="/admin/altaAlum" ><MenuItem  leftIcon={<School />} primaryText="Allta de Alumnos" /></Link>
            <Link to="/admin/info" ><MenuItem  leftIcon={<PersonAdd />} primaryText="Info" /></Link>
          </Menu>
        </Paper>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Root
