import {createSlice} from '@reduxjs/toolkit'
import {registerThunk, loginThunk, currentThunk, logoutThunk} from "./thunk"


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
                    error: action.payload,
                    ///
                    isAuth: false
                }
            },

            // ==============  currentThunk ==============
            [currentThunk.pending] (state,action) {
                return {
                    ...state,
                    isLoading: true,
                    // isLoading: false,
                    isAuth: false
                   
                }
            },
            [currentThunk.fulfilled] (state,action) {
                return {
                    ...state,
                    isLoading: false,
                    user: action.payload,
                    isAuth: true,
                
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
