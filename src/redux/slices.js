import {createSlice} from '@reduxjs/toolkit'
import {registerThunk} from "./thunk"

// const BASE_USER_URL = `https://connections-api.herokuapp.com/` ;

// const userLogin = '/users/login'
// const userRegister = '/users/signup'
// const userLogout = '/users/logout'
// const userCurrent = '/users/current'

const authSlice = createSlice ({
    name: "auth",
    initialState: {
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
            [registerThunk.pending] (state,action) {
                return {
                    ...state,
                    isLoading: true,
                }
            },
            [registerThunk.fulfilled] (state,action) {
                return {
                    ...state,
                    isLoading: false,
                    user: action.payload.user,
                    token: action.payload.token,
                    isAuth: true,
                }
            },
            [registerThunk.rejected] (state,action) {
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
            }
        }
})


export  const {renameProp} = authSlice.actions;
export default authSlice.reducer;

// ====================== CONTACTS ======================
const BASE_CONTACT_URL = `https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/`
const contacts = `/contacts` ;