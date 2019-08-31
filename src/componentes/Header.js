import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap'


import {
  Link
} from 'react-router-dom'

function Header() {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <Navbar color='light' light expand='md'>
      <div className='container'>
        <NavbarBrand tag={Link} to='/'
          className='menu' > Produtos </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className='ml-auto'>

            <NavItem>
              <NavLink tag={Link} to='/acoes' className='opc'>
                Ações
                        </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to='/' className='opc'>
                Info
                        </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to='/sobre' className='opc'>
                Sobre
                        </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Header