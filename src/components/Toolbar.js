import React from 'react'
import { Navbar, NavItem } from 'react-materialize'

export default class Toolbar extends React.Component {
  render() {
    return(
      <Navbar className="Header">
        <NavItem href='/'>Home</NavItem>
        <NavItem href='https://storms-assessment.herokuapp.com/messages' target='_blank'>Messages DB</NavItem>
        <h5 className="welcome">Storms Q3 Assessment</h5>
      </Navbar>
    )
  }
}