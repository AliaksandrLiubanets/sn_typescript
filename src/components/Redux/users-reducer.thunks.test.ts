import {follow, usersActions} from './users-reducer'
import {appActions} from './app-reducer'
import {usersAPI} from '../../api/users-api'
import {ResponseType} from '../../api/auth-api'

jest.mock('../../api/api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: ResponseType<{}> = {
    data: {},
    resultCode: 0,
    fieldsErrors: [],
    messages: [],
}
//@ts-ignore
userAPIMock.followUser.mockReturnValue(Promise.resolve(result))
//@ts-ignore
userAPIMock.unfollowUser.mockReturnValue(Promise.resolve(result))

test('follow thunk success', async () => {
    const thunk = follow(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})

    // expect(dispatchMock).toBeCalledTimes(5)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, appActions.setIsLoading(true))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.setFollowingInProgress(true, 1))
    // expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.setFollowingInProgress(true, 1))
    // expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.follow( 1))
})