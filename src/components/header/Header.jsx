import HeaderNav from "./HeaderNav";
import style from './header.module.scss'
import logo from '../../data/logo_white.svg';
import toggleImage from '../../data/icons8-menu.svg';
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
function Header(){
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [toggle,setToggle] = useState(false);
    function toggleHandler(){

        setToggle(!toggle)
        
    }
    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    return(
        <div className={style.header}>
            <div  className={`${style.content} flex-column flex-md-row`}>
                
                <div className={style.title}>
                    
                    <Link className={style.logo} to='/' onClick={()=>{sessionStorage.setItem('lastPage','/');setToggle(false)}}>
                        <img className={style['logo-img']} src={logo} alt="Logo" />
                    </Link>
                    <button className={`${style.toggle}  d-md-none`}  onClick={toggleHandler} ><img src={toggleImage} alt="toggle"/></button>
                    
                    
                </div>
                {
                    windowSize.innerWidth>768?<HeaderNav  toggle={toggle} setToggle={setToggle}/>:toggle&&<HeaderNav  toggle={toggle} setToggle={setToggle}/>
                }
                

            </div>
        </div>
    )
}


export default Header;