import { useEffect, useState } from "react";
import {Routes,Route, useNavigate} from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem('lastPage')){
            console.log(sessionStorage.getItem('lastPage'))
            navigate(sessionStorage.getItem('lastPage'));
        }
    },[])
    
    
    return(
        <div className="home">
            <h1>Home</h1>
        </div>

    )
}

export default Home;