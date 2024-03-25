import { useEffect,useState,useCallback,useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import style from './home.module.scss'
import data from '../../data/production.json';

function Home() {
    function createBlock(el,index){
        const image = require(`../../data/${el.img}/0.jpeg`)
        const label = el.shortTitle
        
        const block = <Link to="/product" onClick={()=>{productHandler(index)}} key={index+Math.random()}><div className={style.block}  >
            
            <img src={image} className={style.image}/>
            <div className={style.label}>{label}</div>
        
        </div></Link>
        
        return block
    }
    
    function productHandler(id){
        sessionStorage.setItem('product',id);
        window.location.href = '#top'
    }
    
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem('lastPage')) {
            // console.log(sessionStorage.getItem('lastPage'))
            navigate(sessionStorage.getItem('lastPage'));
        }
        sessionStorage.setItem('lastPage', '/');
    }, [])


    return (
        <div className={style.home}>
            <div className={style.center}>
                <h1 className={style.title}>Головна</h1>
                <div className={style.line}></div>
                <div className={style.content}>
                    
                    <div className={style.bottom}>
                        <div className={`${style.production} ${style.item}`}>
                            <div className={style.title}>
                                Наша продукція
                            </div>
                            <div className={style.list}  >
                                {
                                    data.map((el,index)=>createBlock(el,index))
                                }
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Home;