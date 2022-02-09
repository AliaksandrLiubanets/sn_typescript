import samurai_background from '../../../assets/samurai_background.jpg'
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../Redux/profile-reducer'
import {Preloader} from '../../common/Preloader/Preloader'
import ProfileStatus from '../Status/ProfileStatus'
import ProStatus from '../Status/ProStatus'

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string
    setStatus: (status: string) => void
}

export function ProfileInfo ({profile, status, setStatus}: ProfileInfoProps) {

    if (!profile) {
        return <Preloader />
    }

    return <div className={s.profileInfo}>
        <img src={samurai_background} alt="background"/>
        <div className={s.profileInfo_ava}>
            <img src={profile.photos.small } alt="ava"/>
        </div>
        <div className={s.profileInfo_name}>
            <span>{profile.fullName}</span>
        </div>
        <ProfileStatus status={status} setStatus={setStatus}/>
    </div>
}
