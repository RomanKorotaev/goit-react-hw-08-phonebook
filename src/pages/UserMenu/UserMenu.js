import s from './userMenu.module.css'

 
import { useSelector, useDispatch } from "react-redux";
import {logoutThunk} from '../../redux/thunk'

export function UserMenu () {

    const dispatch = useDispatch ();
    const handleLogout = ()=> {
        console.log ("Click! ;)")
        dispatch(logoutThunk());
      }


    const name = useSelector (state  => state.auth.user.name);
console.log ("name =", name )

return(
    <div className={s.userMenuStyle}>
        <h3 className= {s.greeting}>Welcome, {name} </h3>
        <button type="button" onClick ={handleLogout} className={s.logOutBtm} >Log Out</button>
        </div>
)


}