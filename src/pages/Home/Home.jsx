import { useEffect,useState,useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';
import style from './home.module.scss'
import data from '../../data/production.json';

import ImageViewer from 'react-simple-image-viewer';
function Home() {
    
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const allImages =[];
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
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
                    <div className={style.top}>
                        <div className={`${style.navigation} ${style.item}`}>
                            <div className={style.title}>Навігація</div>
                            <div className={style.links}>
                                <Link to='/production'>Продукція</Link>
                                <Link to='/contact'>Контакти</Link>
                                <Link to='/about'>Про нас</Link>
                            </div>

                        </div>
                        <div className={`${style.description} ${style.item}`}>
                            <div className={style.title}>Еталон</div>
                            <div className={style.text}>
                                Завод "Еталон" це підприємство приватної власності у вигляді публічного акціонерного товариства з балансовою вартістю основних виробничих фондів 11,6 млн. грн.<br />
                                Територія огороджена бетонним парканом і має два автомобільні заїзди,<br />
                                проїзди територією асфальтовані.<br />
                                Завод розташований у промисловій зоні міста Умань, Черкаської області, вул.Старицького, 5 зі зручним автомобільним заїздом з боку автобану Київ-Одеса (3,7 км) і траси Кіровоград-Вінниця (0,7 км).<br />


                            </div>

                        </div>
                    </div>
                    <div className={style.bottom}>
                        <div className={`${style.production} ${style.item}`}>
                            <div className={style.title}>
                                Наша продукція
                            </div>
                            {
                                data.map((el,elId) =>{
                                    const images = [];
                                    let i = 0;
                                    while(true){
                                        try{
                                            const img = require(`../../data/${el.img}/${i}.jpeg`);
                                            allImages.push(img);
                                            images.push([img,allImages.length]);

                                            i++;
                                        }catch(e){
                                            i--;
                                            break;
                                        }
                                    }

                                    return(
                                        <div className={style.product} key={el.id}>
                                        <div className={style.title}>
                                            <Link to="/product" onClick={()=>{
                                                productHandler(el.id)
                                            }}>
                                            {el.shortTitle}
                                                                                            
                                            </Link>
                                        </div>
                                        <div className={style.photos}>
                                            {
                                                images.map((src,index)=><img key={index} src={src[0]} alt={el.shortTitle} className={style.image} onClick={() => openImageViewer(src[1]-1)}/>)
                                            }
                                        </div>
                                    </div>
                                    )
                                })
                            }
                                {isViewerOpen && (
                        <ImageViewer
                        src={ allImages  }
                        currentIndex={ currentImage }
                        disableScroll={ true }
                        closeOnClickOutside={ true }
                        onClose={ closeImageViewer }
                        backgroundStyle={{backgroundColor:"rgba(0, 0, 0, 0.7)"}}
                        />
                    )}

                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Home;