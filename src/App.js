import {Link, Routes, Route} from 'react-router-dom';
import s from "./App.module.css";

import {Home} from './pages/Home/Home';
import {Register} from './pages/Register/Register';
import {Login} from './pages/Login/Login';
import { Phonebook } from './pages/Phonebook/Phonebook';

import {PrivateRoute} from './routes/PrivateRoute';
import {PublicRoute} from './routes/PublicRoute';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk, logoutThunk } from './redux/thunk';

import { useSelector } from "react-redux";


import {getIsAuth, getName} from './redux/selectors'
 
function App() {

  const isAuth0 =  useSelector (getIsAuth)
  console.log ("Содержимое isAuth0 =", isAuth0 )

  // const name =  useSelector (getName)
  // console.log ("Содержимое name =", name )

const data = useSelector (state  => state);
console.log ("Содержимое стора =", data )

const isAuth = useSelector (state  => state.auth.isAuth);
console.log ("isAuth =", isAuth )

const  token = useSelector (state  => state.auth.token);
console.log (" token =",  token );

//   if (token) {
//     console.log (" token exists =",  token );
//  } else {
//     console.log ("NO  token = ",  token ); } 


    const dispatch = useDispatch ();


    useEffect ( ()=> {
      console.log (" Произошёл dispatch(currentThunk() "); 
     dispatch(currentThunk());
    }, [dispatch])


    const handleLogout = ()=> {
      console.log ("Click! ;)")
      dispatch(logoutThunk());
    }

  return (
    
<div>
      <header  >
          <nav>
            <ul className={s.linksList}>
              <li>
                <Link className="" to= "/">Home </Link>
              </li>

              <li>
                <Link className="" to= "/contacts">Phonebook </Link>
              </li>
{  !token &&
  <li>
  <Link  className='' to= "/login">Login</Link>
</li>

}

{  !token &&
  <li>
 <Link  className=""  to= "/register">Register</Link>
</li>

}
              {/* <li>
                <Link  className='' to= "/login">Login</Link>
              </li>

              <li>
                <Link  className=""  to= "/register">Register</Link>
              </li> */}
            </ul>

{ token &&  <button type="button" onClick ={handleLogout} className={s.logOutBottom}>Log Out</button>}


            {/* <button type="button" onClick ={handleLogout} className={s.logOutBottom}>Log Out</button> */}

          </nav >
      </header>

      <main className={s.container}>
        <Routes>
            <Route path="/" element = { <Home/>} />
            {/* <Route path="/contacts" element = {<PrivateRoute isAuth={isAuth} component={Phonebook} />} />
            <Route path="/login" element = {<PublicRoute isAuth={isAuth} component={Login}/>} />
            <Route path="/register" element = {<PublicRoute isAuth={isAuth} component={Register}/>} /> */}

            <Route path="/contacts" element = {<PrivateRoute component={Phonebook} />} />
            <Route path="/login" element = {<PublicRoute  component={Login}/>} />
            <Route path="/register" element = {<PublicRoute  component={Register}/>} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
