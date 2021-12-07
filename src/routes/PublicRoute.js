import { Navigate } from "react-router";
import { useSelector } from "react-redux";

// react-компонент должен быть указан с заглавной буквы
export function PublicRoute ({isAuth, component: Component}) {
   
    const  token = useSelector (state  => state.auth.token);

    return (
        <>
            {/* <h1> PUBLIC ROUTE</h1> */}
            {
            // isAuth
            token
             ? <Navigate to = "/" />
              :<Component/> }
        </>
    )
    
}