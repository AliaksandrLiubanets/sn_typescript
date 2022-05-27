import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../Redux/redux-store'
import s from './SearchForm.module.css'
import {Field, Form, Formik} from 'formik'
import {TextInput} from '../../FormikFields/TextInput'
import React, {FC} from 'react'
import {getUsers, SearchType} from '../../Redux/users-reducer'

type PropsType = {
    searchParams: SearchType
}

export const SearchForm: FC<PropsType> = ({searchParams}) => {

    const dispatch = useDispatch()
    const pageSize = useSelector<RootStateType, number>(state => state.usersPage.pageSize)

    return (
        <div>
            <Formik
                initialValues={{
                    term: searchParams.term,
                    //convert data from state - boolean | null to string:
                    friend: searchParams.friend === true ? 'true' : (searchParams.friend === false ? 'false' : 'null'),
                }}
                onSubmit={(values) => {
                    let searchObj: SearchType
                    searchObj = {
                        term: values.term,
                        //convert string to boolean | null as state type required:
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

