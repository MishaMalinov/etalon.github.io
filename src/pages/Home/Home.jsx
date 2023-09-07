import { useEffect, useState } from "react";
import {Routes,Route, useNavigate} from 'react-router-dom';
import style from './home.module.scss'
function Home(){
    const navigate = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem('lastPage')){
            console.log(sessionStorage.getItem('lastPage'))
            navigate(sessionStorage.getItem('lastPage'));
        }
    },[])
    
    
    return(
        <div className={style.home}>
            <div className={style.center}>
                <h1>Головна</h1>
            </div>
            
        </div>

    )
}

export default Home;