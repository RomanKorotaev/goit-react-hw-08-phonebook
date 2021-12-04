import {createSlise} from '@redux/toolkit'


const BASE_USER_URL = `https://connections-api.herokuapp.com/` ;

const userLogin = '/users/login'
const userRegister = '/users/register'
const userLogout = '/users/logout'
const userCurrent = '/users/current'

const authSlice = createSlise ({
    name: "auth",
    initState: {
        user: {name: "", email: "" },
        token: '',
        error: null,
        isLoading: false,
        isAuth: false,
        myprop: "Helloy",
    },
        reducers: {
            "renameProp":  (state, action)=> {
                return {
                    ...state,
                    myProp: action.payload,
                }
                }
            },

        extraReducers: {

    }
})


export  const {renameProp} = authSlice.actions;
export default authSlice.reducer;

// ====================== CONTACTS ======================
const BASE_CONTACT_URL = `https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/`
const contacts = `/contacts` ;