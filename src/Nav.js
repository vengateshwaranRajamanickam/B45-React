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
      <NavLink><Link  to="/">Student</Link>
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink ><Link  to="/teacher">Teacher</Link>      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink ><Link  to="/register">Register Student</Link>      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink ><Link  to="/registerteacher">Register Teacher</Link>      </NavLink>
      </NavItem>
      <NavItem >
      <NavLink ><Link  to="/admin">Admin</Link>  </NavLink >
      </NavItem>
    </Nav>
  );
}