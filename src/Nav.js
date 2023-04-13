import React from 'react';
import {Link} from 'react-router-dom'
import {
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

export default function NavTopbar() {
  return (
    <Nav tabs className='Navbar'>
      <NavItem>
      <NavLink><Link  to="/">Home</Link>
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink ><Link  to="/addbook">Add Book</Link></NavLink>
      </NavItem>
      <NavItem className='Title'>
      National Library
      </NavItem>
    </Nav>
  );
}