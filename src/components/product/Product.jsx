import { Link } from 'react-router-dom';
import style from './product.module.scss';

function Product({title,price,img,id}){
    
    const image = require(`../../data/${img?img:'noimage.jpg'}`);
    function productHandler(){
        sessionStorage.setItem('product',id);
        window.location.href = '#topa'
    }
    return(
        <div className={style.product}>
            <div className={style.img}>
                {/* <img src="https://i.stack.imgur.com/CQsCU.jpg" alt="" style={{'width':'100px','height':'100px'}}/> */}
                <Link  to={`/product`} onClick={productHandler}>
                    <img src={image} alt={title} />
                </Link>
                
            </div>
            <div className={style.title}>{title}</div>
            <Link className={style['btn-link']} to={`/product`} onClick={productHandler}>
                <div className={style.btn}>Детальніше</div>
                
            </Link>
            {/* <div className="description">{description}</div> */}

        </div>
    )
}

export default Product;