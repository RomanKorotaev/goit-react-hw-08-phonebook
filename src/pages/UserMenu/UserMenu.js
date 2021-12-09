import s from './userMenu.module.css'

 
import { useSelector, useDispatch } from "react-redux";
import {logoutThunk} from '../../redux/thunk'
import {getName} from '../../redux/selectors'

export function UserMenu () {

    const dispatch = useDispatch ();
    const handleLogout = ()=> {
        console.log ("Click! ;)")
        dispatch(logoutThunk());
      }

    const name = useSelector (getName);

return(
    <div className={s.userMenuStyle}>
        <h3 className= {s.greeting}>Welcome, {name} </h3>
        <button type="button" onClick ={handleLogout} className={s.logOutBtm} >Log Out</button>
        </div>
)


}