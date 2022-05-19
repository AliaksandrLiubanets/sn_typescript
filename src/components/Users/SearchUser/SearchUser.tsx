import {InputField} from '../../common/InputField/InputField'
import {Button} from '../../common/Button/Button'
import {Checkbox} from '../../common/Checkbox/Checkbox'
import s from './SearchUser.module.css'

export const SearchUser = () => {



    const search = () => {

    }

    return <div className={s.search_block}>
        <InputField placeholder={'search user by name'}/>
        <Checkbox children={'only subscribed'}/>
        <Button label={'Search'} onClickHandler={search} />
    </div>
}