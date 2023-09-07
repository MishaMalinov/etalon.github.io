
import { Link } from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';
function HeaderNav() {
  function handlePage(string){
    sessionStorage.setItem('lastPage',string);
  }
  return (
    <Navbar>
        <Nav className="flex-column flex-md-row ">
          <Link to="/" onClick={()=>{handlePage("/")}}>Головна</Link>
          <Link to="/production" onClick={()=>{handlePage("/production")}}>Продукція</Link> 
          <Link to="/contact" onClick={()=>{handlePage("/contact")}}>Контакти</Link> 
          <Link to="/about" onClick={()=>{handlePage("/about")}}>Про нас</Link>
        </Nav>
    </Navbar>
  )
}

export default HeaderNav;