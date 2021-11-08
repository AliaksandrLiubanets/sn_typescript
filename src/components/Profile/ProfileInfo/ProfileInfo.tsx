import samurai_background from '../../../assets/samurai_background.jpg'
import s from '../Profile.module.css'

function ProfileInfo () {
    return <div className={s.profileInfo}>
        <img src={samurai_background} alt="picture"/>
    </div>
}

export default ProfileInfo