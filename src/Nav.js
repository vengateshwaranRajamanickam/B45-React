import React from 'react';
import {Link} from 'react-router-dom'
import {
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

export default function NavTopbar() {
  return (
    <Nav tabs>
      <NavItem>
      <NavLink><Link  to="/">Library</Link>
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink ><Link  to="/addbook">Add Book</Link></NavLink>
      </NavItem>
    </Nav>
  );
}