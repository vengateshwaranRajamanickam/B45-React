import React from 'react';
import {Link} from 'react-router-dom'
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function NavbarTopbar() {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink >
        <Link  to="/">Students</Link> </NavLink >
      </NavItem>
      <NavItem>
      <NavLink> <Link  to="/teacher">Teacher</Link></NavLink >
      </NavItem>
      <NavItem >
      <NavLink disabled>Admin</NavLink >
      </NavItem>
    </Nav>
  );
}
//onClick={NavLink.className.add("active")}
