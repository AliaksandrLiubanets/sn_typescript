import {FC, useState} from 'react'
import s from './Contacts.module.css'
import {ContactsType, ProfileType} from '../../../Redux/profile-reducer'
import {Button} from '../../../common/Button/Button'
import {EditContacts} from './EditContacts/EditContacts'

type ContactsProps = {
    profile: ProfileType | null
    isOwner: boolean
}

export const Contacts: FC<ContactsProps> = (props) => {

    const [isEdit, setIsEdit] = useState(false)

//check is profile defined to avoid this condition in code below
    let profile: Omit<ProfileType, "photos">
    if (props.profile) {
        profile = props.profile
    } else {
        profile = {} as Omit<ProfileType, "photos">
    }

//check is contacts defined to avoid this condition in code below
    let contacts: ContactsType
    if (profile.contacts) {
        contacts = profile.contacts
    } else {
        contacts = {} as ContactsType
    }

    const onEditContacts = () => {
        setIsEdit(true)
    }

    const offEditContacts = () => {
        setIsEdit(false)
    }

    return (
        <div className={s.content}>
            <div className={s.contacts}>
                <h5>General Info</h5>
                <div className={s.info}>
                    <div>Looking for a job: </div>
                    <div>{profile.lookingForAJob ? 'Yes' : 'No'}</div>
                    <div>Skills: </div>
                    <div>{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : '-----'}</div>
                    <div>Name: </div>
                    <div>{profile.fullName ? profile.fullName : '-----'}</div>
                    <div>About me: </div>
                    <div>{profile.aboutMe ? profile.aboutMe : '-----'}</div>
                </div>
                <h5>Contacts & Socials</h5>
                <div className={s.info}>
                    <div>instagram: </div>
                    <div>{contacts.instagram ? contacts.instagram : 'https://www.instagram.com/'}</div>
                    <div>github: </div>
                    <div>{contacts.github ? contacts.github : 'https://github.com/'}</div>
                    <div>vk: </div>
                    <div>{contacts.vk ? contacts.vk : 'https://vk.com/'}</div>
                </div>
            </div>
            {
                props.isOwner && <Button label={'Edit'} onClickHandler={onEditContacts}/>
            }

            {
                isEdit && <EditContacts profile={profile} offEditContacts={offEditContacts}/>
            }
        </div>
    )
}