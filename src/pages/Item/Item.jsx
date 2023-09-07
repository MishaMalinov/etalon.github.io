import data from '../../data/production.json';
import style from './item.module.scss';
function Item() {
    const globalId = sessionStorage.getItem('product') ? sessionStorage.getItem('product') : '0';
    console.log(window.location.href);
    console.log(globalId);

    const { img, title, price, description } = data[globalId];
    const image = require(`../../data/${img ? img : 'noimage.jpg'}`);
    sessionStorage.setItem('lastPage', `/product`);

    // const des = new DOMParser().parseFromString(description, 'text/html');
    return (
        <div className={style.item}>
            <div className={style.content} >
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
                        <button className="btn btn-outline-success">
                            Написати)
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