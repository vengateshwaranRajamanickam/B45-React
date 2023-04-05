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
        <NavLink >
        <Link  to="/">Students</Link> </NavLink >
      </NavItem>
      <NavItem>
      <NavLink> <Link  to="/Teacher">Teacher</Link></NavLink >
      </NavItem>
      <NavItem >
      <NavLink disabled>Admin</NavLink >
      </NavItem>
    </Nav>
  );
}
//onClick={NavLink.className.add("active")}
