import {v1} from 'uuid'
import ava_artem from '../../assets/ava_lenin.png'
import ava_olga from '../../assets/ava_olga.jpg'
import ava_karina from '../../assets/ava_karina.jpg'

export type FriendType = {
    id: string
    name: string
    ava: string
}

export type SidebarType = {
    friends: Array<FriendType>
}

type SideBarActionsType = {
    
}

const initialState: SidebarType = {
    friends: [
        {id: v1(), name: 'Lenin', ava: ava_artem},
        {id: v1(), name: 'Olga', ava: ava_olga},
        {id: v1(), name: 'Karina', ava: ava_karina}
    ]
}

const sidebarReducer = (state = initialState, action: SideBarActionsType): SidebarType => {

            return state
}

export default sidebarReducer