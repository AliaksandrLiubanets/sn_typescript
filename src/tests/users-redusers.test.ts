import usersReducer, {followAC, UsersStateType} from '../components/Redux/users-reducer'

let state: UsersStateType
type UserType = {
    id: string
    followed: boolean
    status: string
    name: string
    photos: {
        small: string | undefined
        large: string | undefined
    }
    location?: {
        city: string
        country: string
    }
}

beforeEach(() => {
    state = {
        users: [],
        totalCount: 0,
        pageSize: 5,
        currentPage: 2
    }
})

test('should subscribe to user', () => {

    const action = followAC('-3-')
    const changedState = usersReducer(state, action)

    expect(changedState)

})