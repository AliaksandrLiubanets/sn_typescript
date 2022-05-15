import React, {FC} from 'react'
import {Form, Formik} from 'formik'
import {useDispatch} from 'react-redux'
import {ProfileType, updateProfile} from '../../../../Redux/profile-reducer'
import {validateStringValue} from '../../../../FormikFields/validation'
import {Checkbox} from '../../../../FormikFields/Checkbox'
import {TextInput} from '../../../../FormikFields/TextInput'
import s from './EditContacts.module.css'

type EditContactsPropsType = {
    offEditContacts: () => void
    profile: Omit<ProfileType, 'photos'>
}

export const EditContacts:FC<EditContactsPropsType> = ({offEditContacts, profile}) => {

    const dispatch = useDispatch()

    return (
        <>
            <Formik
                initialValues={{
                    userId: profile.userId,
                    aboutMe: profile.aboutMe,
                    lookingForAJob: profile.lookingForAJob,
                    lookingForAJobDescription: profile.lookingForAJobDescription,
                    fullName: profile.fullName,
                    github: profile.contacts.github,
                    vk: profile.contacts.vk,
                    facebook: profile.contacts.facebook,
                    instagram: profile.contacts.instagram,
                    twitter: profile.contacts.twitter,
                    website: profile.contacts.website,
                    youtube: profile.contacts.youtube,
                    mainLink: profile.contacts.mainLink,
                }}
                onSubmit={(values) => {
                    let updatedProfile: Omit<ProfileType, "photos">
                    updatedProfile = {
                        ...profile,
                        aboutMe: values.aboutMe,
                        lookingForAJob: values.lookingForAJob,
                        lookingForAJobDescription: values.lookingForAJobDescription,
                        contacts: {
                            ...profile.contacts,
                            github: values.github,
                            vk: values.vk,
                            instagram: values.instagram,
                        }
                    }
                    console.log(updatedProfile)
                    dispatch(updateProfile(updatedProfile as Omit<ProfileType, 'photos'>))
                    offEditContacts()
                }}
            >

                <Form className={s.edit_form}>
                    <Checkbox name="lookingForAJob" labelName="Looking for a job"/>
                    <TextInput
                        labelName={'Skills'}
                        name={'lookingForAJobDescription'}
                        placeholder={''}
                        validate={validateStringValue}
                    />
                    <TextInput
                        labelName={'aboutMe'}
                        name={'aboutMe'}
                        placeholder={''}
                        validate={validateStringValue}
                    />
                    <TextInput
                        labelName={'Full name'}
                        name={'fullName'}
                        placeholder={''}
                        validate={validateStringValue}
                    />
                    <TextInput
                        labelName={'gitHub'}
                        name={'github'}
                        placeholder={''}
                        // validate={validateStringValue}
                    />
                    <TextInput
                        labelName={'vk'}
                        name={'vk'}
                        placeholder={''}
                        // validate={validateStringValue}
                    />
                    <TextInput
                        labelName={'instagram'}
                        name={'instagram'}
                        placeholder={''}
                        // validate={validateStringValue}
                    />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}
