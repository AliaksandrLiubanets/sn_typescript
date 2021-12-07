import usersReducer, {followAC, unfollowAC, UsersStateType} from '../components/Redux/users-reducer'
import ava_dimych from '../assets/ava_dimych.jpg'
import ava_olga from '../assets/ava_olga.jpg'
import ava_karina from '../assets/ava_karina.jpg'

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
        users: [
            {id: '1', followed: true, status: 'Life is good!', name: 'Dimych',
                photos: {small: ava_dimych, large: ''}, location: {city: 'Minsk', country: 'Belarus'}},
            {id: '2', followed: false, status: 'Life is good!', name: 'Olga',
                photos: {small: ava_olga, large: ''}, location: {city: 'Minsk', country: 'Belarus'}},
            {id: '3', followed: true, status: 'Life is good!', name: 'Karina',
                photos: {small: ava_karina, large: ''}, location: {city: 'Minsk', country: 'Belarus'}}
        ],
        totalCount: 0,
        pageSize: 5,
        currentPage: 2
    }
})

test('should subscribe to user', () => {

    const action = followAC('2')
    const changedState = usersReducer(state, action)

    expect(changedState.users[1].followed).toBe(true)
    expect(changedState.users[0].followed).toBe(true)
    expect(Object.keys(changedState.users[1]).length).toBe(6)

})

test('should unsubscribe from user', () => {

    const action = unfollowAC('3')
    const changedState = usersReducer(state, action)

    expect(changedState.users[0].followed).toBe(true)
    expect(changedState.users[1].followed).toBe(false)
    expect(changedState.users[2].followed).toBe(false)
    expect(Object.keys(changedState.users[1]).length).toBe(6)

})