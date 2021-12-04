// import './App.css';
import s from "./App.module.css";
import {Home} from './pages/Home/Home'
import {Register} from './pages/Register/Register'
import {Login} from './pages/Login/Login'

import {Link, Routes, Route} from 'react-router-dom'
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
            <Route path="/" element = {<Home/>} />
            <Route path="/login" element = {<Login/>} />
            <Route path="/register" element = {<Register/>} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
