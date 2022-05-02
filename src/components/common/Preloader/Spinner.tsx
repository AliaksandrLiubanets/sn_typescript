import preloader from './Bars-1s-200px.gif'
// import preloader from './Bars-1s-200px.svg'
// import preloader from './Bars-1s-200px (1).svg'
import {FC} from 'react'
import s from './Preloader.module.css'

type PreloaderProps = {
    height?: 'h100' | 'h150'
}

export const Preloader:FC<PreloaderProps> = ({height}) => {
    return (
        // <div className={s.wrapper}>
        // <div className={s.preloader + `_${height}`}>
        <div className={s.preloader}>
            <img className={s.img} src={preloader} alt={'img'}/>
        </div>
    // </div>
)
}