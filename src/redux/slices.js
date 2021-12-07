import {createSlice} from '@reduxjs/toolkit'
import {registerThunk, loginThunk, currentThunk, logoutThunk} from "./thunk"


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
            // ==============  registerThunk ==============
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
                    isAuth: false,
                    error: action.payload
                }
            },

            // ==============  loginThunk ==============
            [loginThunk.pending] (state,action) {
                return {
                    ...state,
                    isLoading: true,
                }
            },
            [loginThunk.fulfilled] (state,action) {
                return {
                    ...state,
                    isLoading: false,
                    user: action.payload.user,
                    token: action.payload.token,
                    isAuth: true,
                }
            },
            [loginThunk.rejected] (state,action) {
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
            },

            // ==============  currentThunk ==============
            [currentThunk.pending] (state,action) {
                return {
                    ...state,
                    isLoading: true,
                   
                }
            },
            [currentThunk.fulfilled] (state,action) {
                return {
                    ...state,
                    isLoading: false,
                    user: action.payload,
                    isAuth: true,
                    // isAuth: false,
                }
            },
            [currentThunk.rejected] (state,action) {
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload,
                    isAuth: false,
                }
            },

                  // ==============  logoutThunk ==============
                  [logoutThunk.pending] (state,action) {
                    return {
                        ...state,
                        isLoading: true,
                    }
                },
                [logoutThunk.fulfilled] (state,action) {
                    return {
                        ...state,
                        isLoading: false,
                        user: {name: "", email: "" },
                        token: '',     
                        isAuth: false,
                    }
                },
                [logoutThunk.rejected] (state,action) {
                    return {
                        ...state,
                        isLoading: false,
                        error: action.payload,
                    }
                },
        }
})


export  const {renameProp} = authSlice.actions;
export default authSlice.reducer;

// ====================== CONTACTS ======================
// const BASE_CONTACT_URL = `https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/`
// const contacts = `/contacts` ;