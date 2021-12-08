import { Navigate } from "react-router";
import { useSelector } from "react-redux";

// react-компонент должен быть указан с заглавной буквы
export function PrivateRoute ({isAuth, component: Component}) {
    // console.log ("isAuth = ", isAuth)
    const  token = useSelector (state  => state.auth.token);
    return (
        <>
            {/* <h1> PRIVATE ROUTE</h1> */}
            {  
            //  isAuth
            token
                ? <Component/> 
                : <Navigate to ="/login" />
            } 
                
            
        </>
    )
}

