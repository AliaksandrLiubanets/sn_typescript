import usersReducer, {follow, usersActions, UsersStateType, UserType} from './users-reducer'
import {ResponseType, usersAPI} from '../../api/api'
import {appActions} from './app-reducer'

jest.mock('../../api/api')

const userAPIMock = usersAPI

const result: ResponseType<{}> = {
    data: {},
    resultCode: 0,
    fieldsErrors: [],
    messages: []
}
//@ts-ignore
userAPIMock.followUser.mockReturnValue(Promise.resolve(result))

test('', async () => {
    const thunk = follow(1)
    const dispatchMock = jest.fn()

    //@ts-ignore
    await thunk(dispatchMock)

    // expect(dispatchMock).toBeCalledTimes(5)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, appActions.setIsLoading(true))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.setFollowingInProgress(true, 1))
    // expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.setFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.follow( 1))

})