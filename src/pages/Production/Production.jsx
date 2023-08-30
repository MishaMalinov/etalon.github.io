import { useEffect } from "react";
import Product from "../../components/product/Product";
import data from '../../data/production.json'
function Production(){
    
    return(
        <div className="production">
            <h1 className="title">Каталог товарів</h1>
            <div className="content">
                {
                    data.map((item,index)=><Product key={index} title={item.shortTitle} price={item.price} img={item.img}/>)
                }

            </div>
        </div>
    )
}

export default Production;