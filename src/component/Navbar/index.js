import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElement'

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Pizzu</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar
