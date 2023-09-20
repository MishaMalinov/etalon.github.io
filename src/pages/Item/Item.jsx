import data from '../../data/production.json';
import style from './item.module.scss';
import {Link, useNavigate } from 'react-router-dom';
function Item() {
    const globalId = sessionStorage.getItem('product') ? sessionStorage.getItem('product') : '0';
    
    const { img, title, price, description } = data[globalId];
    const image = require(`../../data/${img ? img : 'noimage.jpg'}`);
    const navigate=useNavigate();
    function handleEmail(){
        sessionStorage.setItem('product', title)
        navigate('/send')
    }
    // console.log(window.location.href);
    // console.log(globalId);

    sessionStorage.setItem('lastPage', `/product`);
    // const des = new DOMParser().parseFromString(description, 'text/html');
    return (
        <div className={style.item}>
            <div className={style.content} >
            <div className={style.links}>
                        <Link to='/' onClick={()=>{sessionStorage.setItem('lastPage','/')}}>Головна</Link> 
                        -
                        <Link to='/production'>Продукція</Link>
                    </div>
                <div className={`${style.top}`} >
                    <div className={style.image}>
                        <img src={image} alt={title} />
                    </div>
                    <aside className={style.aside}>
                        <div className={style.title}>

                            {
                                title
                            }
                        </div>
                        <div className={style.avaible}>
                            В наявності
                        </div>
                        <div className={style.price}>
                            Ціна: {
                                price
                            }
                        </div>
                        <button className="btn btn-outline-success" onClick={handleEmail}>
                            Замовити
                        </button>
                    </aside>
                </div>

                <div className={style.bottom}>
                    <div className={style.label}>Опис товару</div>
                    <div className={style.description} dangerouslySetInnerHTML={{ __html: description }} />
                </div>

            </div>
        </div>

    )
}
export default Item;