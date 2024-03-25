import HeaderNav from "./HeaderNav";
import style from './header.module.scss'
import logo from '../../data/logo_white.svg';
import toggleImage from '../../data/icons8-menu.svg';
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
function Header(){
    const [opacity,setOpacity] = useState(1);
    const [animation, setAnimation] = useState(false)
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [toggle,setToggle] = useState(false);
    function toggleHandler(){
        if(toggle){
            setAnimation(true)
            setTimeout(() => {
                setToggle(!toggle)  
            }, 150);
        }else{
            setAnimation(false)
            setToggle(!toggle)  
        }
        
        
    }
    function toggleOff(){
        if(toggle){
            setAnimation(true)
            setTimeout(() => {
                setToggle(false)  
            }, 150);
        }
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
      function scrollHandler(){
        if(window.scrollY>100){
            setOpacity(0.93)
        }else{
            setOpacity(1);
        }
      }
      window.addEventListener('scroll',scrollHandler);
    return(
        <div className={style.header}  onMouseOut={toggleOff}>
            <div  className={`${style.content} flex-column flex-md-row`} style={{opacity:opacity}} >
                
                <div className={style.title}>
                    
                    <Link className={style.logo} to='/' onClick={()=>{sessionStorage.setItem('lastPage','/');setToggle(false)}}>
                        <img className={style['logo-img']} src={logo} alt="Logo" />
                    </Link>
                    <button className={`${style.toggle}  d-md-none`}   onClick={toggleHandler} ><img src={toggleImage} alt="toggle"/></button>
                    
                    
                </div>
                {
                    windowSize.innerWidth>768?<HeaderNav  toggle={toggle} setToggle={setToggle}/>:toggle&&<HeaderNav animation={animation} toggle={toggle} setToggle={setToggle}/>
                }
                

            </div>
        </div>
    )
}


export default Header;