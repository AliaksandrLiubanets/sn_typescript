import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../Redux/redux-store'
import s from './SearchForm.module.css'
import {Field, Form, Formik} from 'formik'
import {TextInput} from '../../FormikFields/TextInput'
import React, {FC} from 'react'
import {getUsers, SearchType} from '../../Redux/users-reducer'

type PropsType = {
    searchParams: SearchType
    onSearchChange: (filter: SearchType) => void
}

export const SearchForm: FC<PropsType> = ({searchParams, onSearchChange}) => {

    const dispatch = useDispatch()
    const pageSize = useSelector<RootStateType, number>(state => state.usersPage.pageSize)

    return (
        <div>
            <Formik
                initialValues={{
                    term: searchParams.term,
                    friend: 'null',
                }}
                onSubmit={(values) => {
                    let searchObj: SearchType
                    searchObj = {
                        term: values.term,
                        friend: values.friend === 'true' ? true : (values.friend === 'false' ? false : null)
                    }
                    // onSearchChange(searchObj)
                    dispatch(getUsers(1, pageSize, searchObj))
                }}
            >
                <Form className={s.search_block}>
                    <TextInput
                        name={'term'}
                        type={'text'}
                        placeholder={'search by name'}
                    />
                    <Field
                        component="select"
                        name="friend"
                        multiple={false}
                    >
                        <option value="null">all</option>
                        <option value="true">subscribed</option>
                        <option value="false">unsubscribed</option>
                    </Field>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

