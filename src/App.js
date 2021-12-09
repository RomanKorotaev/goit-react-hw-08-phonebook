import {Link, Routes, Route} from 'react-router-dom';
import s from "./App.module.css";

import {Home} from './pages/Home/Home';
import {Register} from './pages/Register/Register';
import {Login} from './pages/Login/Login';
import {Phonebook} from './pages/Phonebook/Phonebook';
import { UserMenu } from './pages/UserMenu/UserMenu';

import {PrivateRoute} from './routes/PrivateRoute';
import {PublicRoute} from './routes/PublicRoute';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk, logoutThunk } from './redux/thunk';

import { useSelector } from "react-redux";


import {getIsAuth, getName} from './redux/selectors'
 
function App() {

//   const isAuth0 =  useSelector (getIsAuth)
//   console.log ("Содержимое isAuth0 =", isAuth0 )

// const data = useSelector (state  => state);
// console.log ("Содержимое стора =", data )

const isAuth = useSelector (state  => state.auth.isAuth);
console.log ("isAuth =", isAuth )

const  token = useSelector (state  => state.auth.token);
console.log (" token =",  token );


    const dispatch = useDispatch ();


    useEffect ( ()=> {
     
      if (token) {
         console.log (" Произошёл dispatch(currentThunk() "); 
        dispatch(currentThunk())
      } 
    }, [dispatch])


  return (
    
    <div>
        <header  >
            <nav>
              <ul className={s.linksList}>
                <li>
                  <Link className={s.linkItem} to= "/">Home </Link>
                </li>

                <li>
                  <Link className={s.linkItem} to= "/contacts">Phonebook </Link>
                </li>

                { !isAuth &&
                  <li>
                  <Link  className={s.linkItem} to= "/login">Login</Link>
                </li>
                }

                { !isAuth &&
                  <li>
                <Link  className={s.linkItem}  to= "/register">Register</Link>
                </li>
                }
              
                { isAuth  &&   <li><UserMenu/> </li>}        

              </ul>
    
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
