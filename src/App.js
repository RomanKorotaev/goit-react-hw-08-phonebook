import {Link, Routes, Route} from 'react-router-dom'
import s from "./App.module.css";
import {Home} from './pages/Home/Home'
import {Register} from './pages/Register/Register'
import {Login} from './pages/Login/Login'
import {PrivateRoute} from './routes/PrivateRoute'
import {PublicRoute} from './routes/PublicRoute'

const isAuth = false;


function App() {
  return (
    <div className={s.container}>

      <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link className={s.titlePhonebook} to= "/">Home </Link>
              </li>

              <li>
                <Link  className={s.contactsTitle} to= "/login">Login</Link>
              </li>

              <li>
                <Link  className={s.contactsTitle}  to= "/register">Register</Link>
              </li>
            </ul>
          </nav>
      </header>

      <main>
        <Routes>
            <Route path="/" element = {<PrivateRoute isAuth={isAuth} component={Home} />} />
            <Route path="/login" element = {<PublicRoute isAuth={isAuth} component={Login}/>} />
            <Route path="/register" element = {<PublicRoute isAuth={isAuth} component={Register}/>} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
