import style from './services.module.scss'
function Services() {

    return (
        <div className={style.services}>
            <div className={style.center}>
                <h1 className={style.title}>Послуги</h1>
                <div className={style.line}></div>
                <div className={style.content}>
                    Приймаємо замовлення на виконання наступних робіт:<br />
                    <ul className={style.list}>
                        <li>
                            Токарні роботи
                        </li>
                        <li>
                            Фрезерні роботи
                        </li>
                        <li>
                            Слюсарні роботи
                        </li>
                        <li>
                            Зварювальні роботи
                        </li>
                        <li>
                            Штампувальні роботи
                        </li>
                        <li>
                            Великовузлове складання
                        </li>
                    </ul>

                </div>
            </div>

        </div>

    )
}

export default Services;