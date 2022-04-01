import {FollowAT, UnFollowAT, UsersStateType} from '../components/Redux/users-reducer'

export const changeUserInArray = (state: UsersStateType, isFollow: boolean, action: FollowAT | UnFollowAT) => ({
    ...state,
    users: state.users.map(u => u.id === action.userId
        ? {...u, followed: isFollow}
        : u)

})

export const updateUserInStateArray = (state: UsersStateType, action: FollowAT | UnFollowAT, objNameProperty: userPropertyType, value: userValueType ) => {
    return {
        ...state,
        users: state.users.map(u => u.id === action.userId
            ? {...u, [objNameProperty]: value}
            : u)
    }
}

export const updateUserInArray = <T>(state: UsersStateType, action: FollowAT | UnFollowAT, objNameProperty: T) => {
    return {
        ...state,
        users: state.users.map(u => u.id === action.userId
            ? {...u, ...objNameProperty}
            : u)
    }
}

type userValueType = string | boolean
type userPropertyType =
    | 'id'
    | 'followed'
    | 'status'
    | 'name'
    | 'photos'
    | 'uniqueUrlName'
    | 'location'