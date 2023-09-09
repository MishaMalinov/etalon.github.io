import HeaderNav from "./HeaderNav";
import style from './header.module.scss'
import logo from '../../data/logo_white.svg';
import toggleImage from '../../data/icons8-menu.svg';
import { useEffect, useState } from "react";
function Header(){
    const [toggle,setToggle] = useState(window.innerWidth>768);
    function toggleHandler(){

        setToggle(!toggle)
        
    }
    useEffect(()=>{
        console.log(window.innerWidth)
        console.log(toggle)
       
    })
    return(
        <div className={style.header}>
            <div  className={`${style.content} flex-column flex-md-row`}>
                
                <div className={style.title}>
                    <div className={style.logo}>
                        <img className={style['logo-img']} src={logo} alt="Logo" />
                    </div>
                    <button className={`${style.toggle}  d-md-none`}  onClick={toggleHandler} ><img src={toggleImage} alt="toggle"/></button>
                    {/* <div className={`${style['title-name']} d-md-none`}><span >Еталон</span></div> */}
                    
                </div>
                {
                    toggle&&<HeaderNav toggle={toggle} setToggle={setToggle}/>
                }
                

            </div>
        </div>
    )
}


export default Header;