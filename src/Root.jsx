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
import Schedule from 'material-ui/svg-icons/action/schedule'
import Info from 'material-ui/svg-icons/action/info'

import Drawer from 'material-ui/Drawer'

function handleTouchTap () {
  this.state.sideMenu = true
}

class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: true,
      sideMenu: false
    }
  }
  render () {
    const {open, sideMenu} = this.state
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
        <AppBar title={<span >Menu</span>} onLeftIconButtonTouchTap={() => this.setState({sideMenu: true})} />
        <div className='body-content'>
        <Paper className="menu-side" style={ style }>
          {/* <AppBar title={<span >Title</span>} onTitleTouchTap={handleTouchTap} /> */}
          <Menu style={menu}>
            <Link to="/admin/Asistencia" ><MenuItem leftIcon={<Schedule />} primaryText="Asistencia" /></Link>
            <Link to="/admin/altaProf" ><MenuItem leftIcon={<PersonAdd />} primaryText="Alta de Profesores" /></Link>
            <Link to="/admin/altaAlum" ><MenuItem leftIcon={<School />} primaryText="Alta de Alumnos" /></Link>
            <Link to="/admin/info" > <MenuItem leftIcon={<Info />} primaryText="Info" /></Link>
          </Menu>
        </Paper>
        <Drawer
          docked={false}
          onRequestChange={(sideMenu) => this.setState({sideMenu})}
          open={sideMenu}>
          <AppBar title={<span >Menu</span>} onLeftIconButtonTouchTap={() => this.setState({ sideMenu: false })} />
          <Link to="/admin/Asistencia" ><MenuItem leftIcon={<Schedule />} primaryText="Asistencia" /></Link>
          <Link to="/admin/altaProf" ><MenuItem leftIcon={<PersonAdd />} primaryText="Alta de Profesores" /></Link>
          <Link to="/admin/altaAlum" ><MenuItem leftIcon={<School />} primaryText="Alta de Alumnos" /></Link>
          <Link to="/admin/info" > <MenuItem leftIcon={<Info />} primaryText="Info" /></Link>
       </Drawer>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Root
