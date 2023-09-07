import HeaderNav from "./HeaderNav";
import style from './header.module.scss'
import logo from '../../data/logo_white.svg';
function Header(){
    return(
        <div className={style.header}>
            <div  className={`${style.content} flex-column flex-md-row`}>
                
                <div className={style.title}>
                    <div className={style.logo}>
                        <img className={style['logo-img']} src={logo} alt="Logo" />
                    </div>
                    
                    <div className={`${style['title-name']} d-md-none`}><span >Еталон</span></div>
                </div>
                <HeaderNav/>

            </div>

            
            <div className="topa" id="topa"></div>
        </div>
    )
}


export default Header;