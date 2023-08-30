
function Product({title,price,img}){
    
    const image = require(`../../data/${img?img:'noimage.jpg'}`);
    return(
        <div className="product">
            <div className="img">
                {/* <img src="https://i.stack.imgur.com/CQsCU.jpg" alt="" style={{'width':'100px','height':'100px'}}/> */}
                <img src={image} alt={title} style={{'width':'200px','height':'200px'}}/>
            </div>
            <div className="title">{title}</div>
            <div className="price">{price}</div>
            <button className="btn btn-success">Buy</button>
            {/* <div className="description">{description}</div> */}

        </div>
    )
}

export default Product;