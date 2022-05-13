import {FC} from 'react'
import s from './Contacts.module.css'
import {ProfileType} from '../../Redux/profile-reducer'

type ContactsProps = {
    profile: ProfileType | null
}

export const Contacts: FC<ContactsProps> = (props) => {

    let profile
    if (props.profile) {
        profile = props.profile
    } else {
        profile = {}
    }

    let contacts
    if (profile.contacts) {
        contacts = profile.contacts
    } else {
        contacts = {}
    }

    return (
        <div className={s.content}>
            <div className={s.contacts}>
                <h5>General Info</h5>
                <div className={s.info}>
                    <div>Looking for a job: </div>
                    <div>{profile.lookingForAJob ? profile.lookingForAJob : 'Yes'}</div>
                    <div>Description: </div>
                    <div>{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'React development'}</div>
                    <div>Full name: </div>
                    <div>{profile.fullName ? profile.fullName : 'Zadrot'}</div>
                </div>
                <h5>Contacts & Socials</h5>
                <div className={s.info}>
                    <div>Instagram: </div>
                    <div>{contacts.instagram ? contacts.instagram : 'https://www.instagram.com/'}</div>
                    <div>github: </div>
                    <div>{contacts.github ? contacts.github : 'https://github.com/'}</div>
                    <div>vk: </div>
                    <div>{contacts.vk ? contacts.vk : 'https://vk.com/'}</div>
                </div>
            </div>
        </div>
    )
}