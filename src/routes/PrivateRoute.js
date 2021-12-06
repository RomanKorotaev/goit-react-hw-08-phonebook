import { Navigate } from "react-router";
import {Home} from '../pages/Home/Home'



// react-компонент должен быть указан с заглавной буквы
export function PrivateRoute ({isAuth, component: Component}) {
    console.log ("isAuth = ", isAuth)
    return (
        <>
            <h1> PRIVATE ROUTE</h1>
            {/* {isAuth ? <Component/> : <Navigate to ="/login" />} */}
            {isAuth ? <Home/> : <Navigate to ="/login" />}
            
        </>
    )
}

