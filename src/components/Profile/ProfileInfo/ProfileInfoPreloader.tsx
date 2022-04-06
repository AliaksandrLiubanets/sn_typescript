import {FC} from 'react'
import s from '../ProfileInfo/ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader'


type PreloaderProps = {}

export const ProfilePreloader:FC<PreloaderProps> = (props) => {
    return <div className={s.profile_preloader}>
        <Preloader />
    </div>
}