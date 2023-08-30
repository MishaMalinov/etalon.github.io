
function Contact(){

    return(
        <div className="contact">
            <h1>КОНТАКТНА ІНФОРМАЦІЯ </h1>
            <div className="content">
                <div className="adress">
                    <div className="adress-title">
                        АДРЕСА
                    </div>
                    <div className="adress-content">
                        Україна,  Черкаська область,  Умань,  20300,  вул. Старицького, 5
                    </div>
                </div>
                <div className="numbers">
                    <div className="numbers-title">
                        ТЕЛЕФОНИ ПІДПРИЄМСТВА
                    </div>
                    <div className="numbers-content"> 
                            <div>
                                <div>
                                    Дирекція
                                </div>
                                    +38 (04744) 23-35-9 <br />
                                    +38 (067) 406-74-15

                            </div>
                            <div>
                                <div>
                                    Відділ збуту
                                </div>

                                +38 (097) 683-96-43 <br />
                                +38 (04744) 23-35-9
                            </div>
                           
                            
                    </div>

                </div>
                <div className="owner">
                    <div className="owner-title">
                        КЕРІВНИК
                    </div>
                    <div className="owner-content">
                        Мітасов Максим Вікторович
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;