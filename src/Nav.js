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
      <NavLink tag={Link} to="/" exact activeClassName="active">
</NavLink>
      </NavItem>
      <NavItem>
      <NavLink tag={Link} to="/teacher" activeClassName="active">
      </NavLink>
      </NavItem>
      <NavItem >
      <NavLink disabled>Admin</NavLink >
      </NavItem>
    </Nav>
  );
}
//onClick={NavLink.className.add("active")}
