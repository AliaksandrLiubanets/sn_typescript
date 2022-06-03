import React, {FC} from 'react'
import {Header} from './Header'
import {useSelector} from 'react-redux'
import {appSelector, authSelector} from '../../selectors/users-selectors'

export const HeaderContainer: FC = () => {
    const {data, isAuth, ownAvatar} = useSelector(authSelector)
    const {isLoading, isInitializing} = useSelector(appSelector)

        return <Header
            isAuth={isAuth}
            login={data.login}
            isInitializing={isInitializing}
            avatar={ownAvatar}
            isLoading={isLoading}
        />
}