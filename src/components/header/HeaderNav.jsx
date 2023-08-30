
import { Link } from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';
function HeaderNav() {

  return (
    <Navbar>
        <Nav className="flex-column flex-md-row ">
          <Link to="/">Головна</Link>
          <Link to="/production">Продукція</Link> 
          <Link to="/contact">Контакти</Link> 
          <Link to="/about">Про нас</Link>
        </Nav>
    </Navbar>
  )
}

export default HeaderNav;