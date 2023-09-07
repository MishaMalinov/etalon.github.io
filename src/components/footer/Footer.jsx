import style from './footer.module.scss';
import { Link } from 'react-router-dom';
function Footer() {

    return (
        <div className={style.footer}>
            <div className={style.line}></div>
            <div className={style.content}>
                <div className="footer-title">
                    &copy; ETALON
                </div>
                <div className={style.adress}>
                    УКРАЇНА, ЧЕРКАСЬКА ОБЛАСТЬ, УМАНЬ, 20300, ВУЛ. СТАРИЦЬКОГО, 5

                </div>
                <div className={style.contact}>
                        <Link to="/contact">Контакти</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;