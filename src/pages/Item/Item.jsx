import data from '../../data/production.json';
import style from './item.module.scss';
import {useState, useCallback } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';

function Item() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    
    //for work of redirects
    const globalId = sessionStorage.getItem('product') ? sessionStorage.getItem('product') : '0';
    sessionStorage.setItem('lastPage', `/product`);
    //getting data from json by id in sessionStorage
    const { img, title, price, description } = data[globalId];
    const images = [];
    {
        let i = 0;
        while(true){
            try{
                
                images.push(require(`../../data/${img}/${i}.jpeg`));

                console.log(images[i])
                i++;
            }catch(e){
                break;
            }
        }
    }
    
    
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    const navigate=useNavigate();
    function handleEmail(){
        sessionStorage.setItem('productBuy', title)
        navigate('/send')
    }
    
    return (
        <div className={style.item}>
            <div className={style.content} >
            
                <div className={`${style.top}`} >
                    <div className={style.image} >
                        <div className={style.img}>
                        {/* {
                            images.map((image,index)=><img
                            src={image}
                            alt={title}
                            key={index}
                            
                            style={index!==0?{height:"75px", width:'90px',objectFit:'cover',marginRight:'15px'}:{marginBottom:'20px'}}
                            onClick={() => openImageViewer(index)}
                            />)
                        } */}
                        <img src={images[0]} alt={title} onClick={() => openImageViewer(0)} />
                        </div>
                        
                    </div>
                    {isViewerOpen && (
                        <ImageViewer
                        src={ images }
                        currentIndex={ currentImage }
                        disableScroll={ true }
                        closeOnClickOutside={ true }
                        onClose={ closeImageViewer }
                        backgroundStyle={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}
                        />
                    )}
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
                        <button className={style.btn} onClick={handleEmail}>
                            Замовити
                        </button>
                    </aside>
                </div>
                
                {
                    description&&<div className={style.bottom}>
                      <div className={style.line}></div> 
                    <div className={style.label}>Опис товару</div>
                    <div className={style.description} dangerouslySetInnerHTML={{ __html: description }} />
                </div>
                }        
                

            </div>
        </div>

    )
}
export default Item;