import { Navigate } from "react-router";
// import { Navigate } from "react-router-dom";

// react-компонент должен быть указан с заглавной буквы
export function PublicRoute ({isAuth, component: Component}) {
    return (
        <>
            <h1> PUBLIC ROUTE</h1>
            {isAuth
             ? <Navigate to = "/" />
             :<Component/> }
       
        </>
    )
    
}