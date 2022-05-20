import s from './NoUsersFound.module.css'


export const NoUsersFound = () => {

    return <div className={s.no_users}>
        <div>😩</div>
        <div><span>No found users!</span></div>
        <div><span>Change your search params</span></div>
    </div>
}