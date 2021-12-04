import { Navigate } from "react-router";
// import { Navigate } from "react-router-dom";

// react-компонент должен быть указан с заглавной буквы
export function PrivateRoute ({isAuth, component: Component}) {
    return (
        <>
            <h1> PRIVATE ROUTE</h1>
            {isAuth ? <Component/> : <Navigate to ="/login" />}
            
        </>
    )
}

