import preloader from './Bars-1s-200px.gif'
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <div className={s.preloader__row}>
                <img className={s.img} src={preloader} alt={'img'}/>
            </div>
        </div>
    )
}