
import { Link } from "react-router-dom";
import style from './header.module.scss'
import { Navbar, Nav } from 'react-bootstrap';
function HeaderNav({toggle,setToggle,animation}) {
  function handlePage(string){
    sessionStorage.setItem('lastPage',string);
    if(window.innerWidth<768){
        setToggle(!toggle);
    }
    
  }
  return (
    <Navbar className={`d-md-block ${animation?style.totop:''}`}> 
        <Nav className="flex-column flex-md-row " >
          <Link to="/#top" onClick={()=>{handlePage("/")}}>Головна</Link>
          <Link to="/about#top" onClick={()=>{handlePage("/about")}}>Про нас</Link>
          <Link to="/production#top" onClick={()=>{handlePage("/production")}}>Продукція</Link> 
          <Link to="/#top" onClick={()=>{handlePage("/")}}>Послуги</Link> 
          <Link to="/contact#top" onClick={()=>{handlePage("/contact")}}>Контакти</Link> 
          <Link to="/#top" onClick={()=>{handlePage("/")}}>Інше</Link> 
        </Nav>
    </Navbar>
  )
}

export default HeaderNav;