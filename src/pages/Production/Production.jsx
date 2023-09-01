import style from './production.module.scss'
import axios from 'axios';
import Product from "../../components/product/Product";
import data from '../../data/production.json'
import { useEffect, useState } from 'react';
function Production() {
    const [current, setCurrent] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        console.log(current)
        
    },[current])
    if (current) {
        return (
            <div className="item">
                {current}
            </div>
        )
    } else {
        return (

            <div className="production">
                <h1 className="title">Каталог товарів</h1>
                <div className={style.content} >
                    {
                        data.map((item, index) => <Product setCurrent={setCurrent} key={index} title={item.shortTitle} price={item.price} img={item.img} id={item.id} />)
                    }

                </div>
            </div>
        )
    }



}

export default Production;