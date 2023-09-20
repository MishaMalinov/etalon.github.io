import { useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import style from './home.module.scss'
function Home(){
    const navigate = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem('lastPage')){
            // console.log(sessionStorage.getItem('lastPage'))
            navigate(sessionStorage.getItem('lastPage'));
        }
        sessionStorage.setItem('lastPage','/');
    },[])
    
    
    return(
        <div className={style.home}>
            <div className={style.center}>
                <h1 className={style.title}>Головна</h1>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={style.links}>
                        <Link to='/production'>Продукція</Link>
                        <Link to='/contact'>Контакти</Link>
                        <Link to='/about'>Про нас</Link>
                    </div>
                    

                </div>
            </div>
            
        </div>

    )
}

export default Home;