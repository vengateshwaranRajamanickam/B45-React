import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function NavbarTopbar(props) {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink >
        <Link  to="/">Users</Link> </NavLink >
      </NavItem>
      <NavItem>
      <NavLink><Link to="/Profile">Profile</Link> </NavLink >
      </NavItem>
      <NavItem >
      <NavLink ><Link to="/CreateUsers">CreateProfile</Link> </NavLink >
      </NavItem>
    </Nav>
  );
}
//onClick={NavLink.className.add("active")}
export default NavbarTopbar;