import usersReducer, {usersActions, UsersStateType, UserType} from './users-reducer'

let state: UsersStateType
let user_1: UserType
let user_2: UserType

beforeEach(() => {
    user_1 = {
        id: 1,
        followed: true,
        status: 'IT-dev',
        name: 'Anton',
        photos: {
            small: 'small',
            large: 'large'
        },
        uniqueUrlName: '',
        location: {
            city: 'Minsk',
            country: 'Belarus'
        }
    }

    user_2 = {
        id: 2,
        followed: false,
        status: 'IT',
        name: 'Sasha',
        photos: {
            small: 'small',
            large: 'large'
        },
        uniqueUrlName: '',
        location: {
            city: 'Grodno',
            country: 'Belarus'
        }
    }
    state = {
        users: [user_1, user_2],
        totalCount: 0,
        pageSize: 5,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
        searchParams: {
            term: '',
            friend: null
        }
    }

})

test('Follow user', () => {

    const action = usersActions.follow(2)
    const result = usersReducer(state, action)

    expect(result.users.length).toBe(2)
    expect(result.users[1].followed).toBe(true)
})

test('UnFollow user', () => {

    const action = usersActions.unfollow(1)
    const result = usersReducer(state, action)

    expect(result.users.length).toBe(2)
    expect(result.users[0].followed).toBe(false)
})

test('Set users to state', () => {

    const user_3: UserType = {
        id: 3,
        followed: false,
        status: 'IT-dev',
        name: 'Sveta',
        photos: {
            small: 'small',
            large: 'large'
        },
        uniqueUrlName: '',
        location: {
            city: 'Mogilev',
            country: 'Belarus'
        }
    }
    const user_4: UserType = {
        id: 4,
        followed: false,
        status: 'IT-dev',
        name: 'Kolya',
        photos: {
            small: 'small',
            large: 'large'
        },
        uniqueUrlName: '',
        location: {
            city: 'Vitebsk',
            country: 'Belarus'
        }
    }
    const usersArray: Array<UserType> = [user_3, user_4]


    const action = usersActions.setUsers(usersArray)
    const result = usersReducer(state, action)
    const notExisingUser = result.users.find(user => user.id === user_1.id)

    expect(result.users.length).toBe(2)
    expect(result.users[0].id).toBe(3)
    expect(notExisingUser).toBeUndefined()
})

test('Set total users count', () => {

    const action = usersActions.setTotalUsersCount(1500)
    const result = usersReducer(state, action)

    expect(result.totalCount).toBe(1500)
})

test('Set current page', () => {

    const action = usersActions.setCurrentPage(10)
    const result = usersReducer(state, action)

    expect(result.currentPage).toBe(10)
})

test('Set fetching toggle', () => {

    const action = usersActions.toggleIsFetching(true)
    const result = usersReducer(state, action)

    expect(result.isFetching).toBe(true)
})

test('Set following in progress', () => {

    const action1 = usersActions.setFollowingInProgress(true, 1)
    const action2 = usersActions.setFollowingInProgress(true, 2)
    const action3 = usersActions.setFollowingInProgress(false, 2)
    const result1 = usersReducer(state, action1)
    const result2 = usersReducer(result1, action2)
    const result3 = usersReducer(result2, action3)

    expect(result1.followingInProgress.length).toBe(1)
    expect(result1.followingInProgress[0]).toBe(1)

    expect(result2.followingInProgress.length).toBe(2)
    expect(result2.followingInProgress.includes(1)).toBe(true)
    expect(result2.followingInProgress.includes(2)).toBe(true)

    expect(result3.followingInProgress.length).toBe(1)
    expect(result3.followingInProgress.includes(1)).toBe(true)
    expect(result3.followingInProgress.includes(2)).toBe(false)
})
