import {useState} from "react"
import { useDispatch } from "react-redux";
import {registerThunk} from '../../redux/thunk'

export function  Register () {

const [name, setName]= useState ("");
const [email, setEmail]= useState ("");
const [password, setpassworP]= useState ("");

const dispatch = useDispatch();

const handleChange = (e) =>{
    switch (e.target.name) {
        case "name":
            setName (e.target.value)
            break;

            case "email":
            setName (e.target.value)
            break;

            case "password":
            setName (e.target.value)
            break;

            default:
            alert ("Check input name please")
    }


};

const handleSubmit = (e) =>{
    e.preventDefault();
    const user = {name, email, password};
    dispatch (registerThunk(user));
};

    return (
        <div>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 name="name"
                 value={name}
                 placeholder = "Name"
                 onChange= {handleChange}
                 />

            <br/>
                 <input
                 type="text"
                 name="email"
                 value={email}
                 placeholder = "Email"
                 onChange= {handleChange}
                 />

            <br/>

            <input
                 type="text"
                 name="password"
                 value={password}
                 placeholder = "Password"
                 onChange= {handleChange}
                 />
                 
                 <button type="submit">Add</button>
             
            </form>

        </div>
    )
}