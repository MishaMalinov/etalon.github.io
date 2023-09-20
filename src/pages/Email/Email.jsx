import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import style from './email.module.scss';
function Email(){
    const [alert ,setAlert] = useState(null);
    const tel = useRef()
    const form = useRef();
    const [alertStyle,setAlertStyle] = useState(null);
    function sendEmail(e){
        e.preventDefault();
        // console.log(form.current)
        emailjs.sendForm('service_d95reon', 'template_3mc8wvf', form.current,'6vN-BeMX4jnlwjIry')
        .then(res=> {
        // console.log('SUCCESS!', response.status, response.text);
            setAlert('Ваше повідомлення було успішно відправлене');
            setAlertStyle(true);
        }, err=>{
            setAlert('Щось пішло не так')
            setAlertStyle(false);


        });
        
    }
    function handleTel(num){
        const char = num[num.length-1];

        try{
            if(!(char.match(/[0-9]/g) || char.match(/\+/g))){
                tel.current.value = tel.current.value.slice(0,-1);
            }
        }catch(error){
            tel.current.value = ''
            console.log(error)
        }
        
    }
    useEffect(()=>{
        sessionStorage.setItem('lastPage','/send');
    },[]);
    return(
        <div className={style.email}>
            <div className={style.center}>
                
                <h1 className={style.title}>
                    Придбання товару
                </h1>
                <div className={style.line}></div>
                
                <form className={style.form} action="" ref={form} onSubmit={sendEmail}>
                    <input type="text" 
                    name="user_name"
                    placeholder="ПІБ*"
                    required
                    />
                    <input type="email" 
                    name="user_email"
                    placeholder="Електронна пошта*"
                    required
                    />
                    <input type="tel" 
                    name="user_tel"
                    placeholder="Номер телефону*"
                    required
                    onChange={(e)=>{handleTel(e.target.value)}}
                    ref={tel}
                    />
                    <input type="text" 
                    name="product"
                    placeholder="Назва продукту*"
                    value={sessionStorage.getItem('product')||""}
                    readOnly
                    required
                    />
                    <textarea name="message" cols="30" rows="2" placeholder="Повідомлення"></textarea>
                    <button type="submit" >Відправити</button>
                </form>
            </div>
            <div onClick={()=>setAlertStyle(null)} className={style.alert}  style={{display:alertStyle===null?"none":"block",backgroundColor:alertStyle?"green":"red"}}>
                    {
                        alert
                    }
            </div>
        
        </div >
    )
}

export default Email;