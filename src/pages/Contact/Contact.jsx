import style from './contact.module.scss'
import address from '../../data/address.svg'
import telephone from '../../data/telephone.svg'
import owner from '../../data/owner.svg'
function Contact(){
    function copyFunction(text){
        console.log(text);
        navigator.clipboard.writeText(text);

    }
    return(
        <div className={style.contact}>
            <h1>Контактна інформація </h1>
            <div className={style.content}>
                <div className={`${style.address} ${style.item}`}>
                    <div className={style['address-image']}>
                        <img src={address} alt="" />
                    </div>
                    <div className={style['address-content']}>
                        <div className={style['address-title']}>
                            АДРЕСА
                        </div> 
                        <div className={style['address-content']} onClick={()=>{
                            copyFunction('Україна,  Черкаська область,  Умань,  20300,  вул. Старицького, 5')
                        }}>
                            Україна,  Черкаська область,  Умань,  20300,  вул. Старицького, 5
                            
                        </div>
                    </div>
                    
                    
                </div>
                <div className={`${style.numbers} ${style.item}`}>
                        <div className={style['numbers-image']}>
                            <img src={telephone} alt="" />

                        </div>
                        <div className={style['numbers-content']}>
                            <div className={style["numbers-title"]}>
                                ТЕЛЕФОНИ ПІДПРИЄМСТВА
                            </div>
                            <div className={style["numbers-nums"]}>
                                <div className="first" onClick={()=>{
                                    copyFunction('+38 (096) 244-18-14')
                                }}>
                                    +38 (096) 244-18-14
                                    
                                </div>
                                <div className="second" onClick={()=>{
                                    copyFunction('+38 (067) 406-74-15')
                                }}>
                                    +38 (067) 406-74-15
                                    
                                </div>
                                
                            </div>
                        </div>
                        
                </div>
                <div className={`${style.owner} ${style.item}`}>
                    <div className={style["owner-image"]}>
                        <img src={owner} alt="" />
                    </div>
                        
                    <div className={style['owner-content']}>
                        <div className={style["owner-title"]}>
                            КЕРІВНИК
                        </div>
                        <div className={style["owner-content"]}>
                            Мітасов Максим Вікторович
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact;