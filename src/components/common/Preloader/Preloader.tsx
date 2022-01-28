import preloader from './Bars-1s-200px.gif'
// import preloader from './Bars-1s-200px.svg'
// import preloader from './Bars-1s-200px (1).svg'
import {FC} from 'react'
import s from './Preloader.module.css'

type PreloaderProps = {}

export const Preloader:FC<PreloaderProps> = (props) => {
    return <div className={s.preloader}>
        <img src={preloader}/>
    </div>
}