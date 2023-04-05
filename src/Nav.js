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
      <NavLink><Link  to="/">Student</Link>
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink ><Link  to="/teacher">Teacher</Link>      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink ><Link  to="/register">Register Student/Teacher</Link>      </NavLink>
      </NavItem>
      <NavItem >
      <NavLink disabled>Admin</NavLink >
      </NavItem>
    </Nav>
  );
}
//onClick={NavLink.className.add("active")}
