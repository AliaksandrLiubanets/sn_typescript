import samurai_background from '../../../assets/samurai_background.jpg'
import s from '../Profile.module.css'
import {ProfileType} from '../../Redux/profile-reducer'

type ProfileInfoProps = {
    profile: ProfileType | null
}

export function ProfileInfo ({profile}: ProfileInfoProps) {
    return <div className={s.profileInfo}>
        <img src={samurai_background} alt="picture"/>
        <div className={s.profileInfo_ava}>
            <img src={!profile ? '' : profile.photos.small } alt="ava"/>
        </div>
        <div className={s.profileInfo_name}>
            <span>{profile && profile.fullName}</span>
        </div>
    </div>
}
