import data from '../../data/production.json';
function Item(){
    const globalId = window.location.href.match(/[0-9]+/g)[1];
    const res = null;
    
    const {img,title,price,id} = data[globalId];
    const image = require(`../../data/${img?img:'noimage.jpg'}`);
    sessionStorage.setItem('lastPage',`/product?id=${globalId}`)
    return(
        <div >
            <div >
                {/* <img src="https://i.stack.imgur.com/CQsCU.jpg" alt="" style={{'width':'100px','height':'100px'}}/> */}
                
                    <img src={image} alt={title} />
                
                
            </div>
            <div className="title">{title}</div>
            <div className="price">{price}</div>
            <button className="btn btn-success">Buy</button>
            {/* <div className="description">{description}</div> */}

        </div>
    )
}
export default Item;