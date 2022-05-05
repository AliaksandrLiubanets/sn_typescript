import s from './Spinner.module.css'

export const Spinner = () => {
    return <div className={s.preloader}>
        <div className={s.preloader__row}>
            <div className={s.loader}></div>
        </div>
    </div>
}