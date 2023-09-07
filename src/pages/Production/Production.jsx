import style from './production.module.scss'
import axios from 'axios';
import Product from "../../components/product/Product";
import data from '../../data/production.json'
import { useEffect, useState } from 'react';
function Production() {
        return (

            <div className={style.production}>
                <div className={style.body}>
                    <h1 className={style.title}>Продукція</h1>
                    <div className={style.line}></div>
                    <div className={style.content} >
                        {
                            data.map((item, index) => <Product  key={index} title={item.shortTitle} price={item.price} img={item.img} id={item.id} />)
                        }

                    </div>
                </div>
                
            </div>
        )
    



}

export default Production;