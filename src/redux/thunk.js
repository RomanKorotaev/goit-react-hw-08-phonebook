import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_USER_URL = `https://connections-api.herokuapp.com` ;

const userLogin = '/users/login'
const userRegister = '/users/signup'
const userLogout = '/users/logout'
const userCurrent = '/users/current'

// =============REGISTER/SIGUP THUNK =============
export const registerThunk = createAsyncThunk (
    "user/register",
    async (user, {rejectWithValue})=> {
    try{
const response = await fetch(BASE_USER_URL + userRegister, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
    });
    console.log ("response", response);
    const data = await response.json();
    console.log ("data", data); 
    return data; //action.payload
    } catch (err){
        rejectWithValue ({error: err.message})
    }
})

// ============= LOGIN THUNK =============
export const loginThunk = createAsyncThunk (
    "user/login",
    async (user, {rejectWithValue})=> {
    try{
const response = await fetch(BASE_USER_URL + userLogin, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
    });
    // console.log ("response", response);
    const data = await response.json();
    // console.log ("data", data); 
    return data; //action.payload
    } catch (err){
        rejectWithValue ({error: err.message})
    }
})

// ============= CURRENT USER THUNK =============
export const currentThunk = createAsyncThunk (
    "user/current",
    async (_, {rejectWithValue, getState})=> {
        const state= getState();
        // console.log ("redux store:   state= getState()  : ",state);
        // console.log ("redux store:  state.auth =  : ",state.auth);
        // console.log ("redux store:  state.auth.token =  : ",state.auth.token);

        const token = state.auth.token;
        // if (!state.auth.token) return;
        // if (!token) return;
        // if (token===""){
            if (!token) {
            // console.log ("Токена нет - уходим из currentThunk")
            return;

                } else {
                    try{
                        const response = await fetch(BASE_USER_URL + userCurrent, {
                                method: 'GET',
                                headers: {
                                    // "Content-Type": "application/json",
                                    // "Authorization" : `Bearer ${state.auth.token}`,
                
                                    // Authorization : `Bearer ${state.auth.token}`,
                                    Authorization : `Bearer ${token}`,
                                },
                            
                                });
                                // console.log ("response", response);
                                const data = await response.json();
                                // console.log ("data = await response.json()   : ", data); 
                                
                                return data; //action.payload
                        } catch (err){
                            console.log ("err = ", err)
                                // rejectWithValue ({error: err.message});
                                rejectWithValue (err.message)
                            }


                }

})

// ============= LOGOUT THUNK =============

export const logoutThunk = createAsyncThunk (
    "user/logout",
    async (user, {rejectWithValue, getState})=> {

        const state= getState();
        // console.log ("redux store:   state= getState()  : ",state);
        // console.log ("redux store:  state.auth =  : ",state.auth);
        // console.log ("redux store:  state.auth.token =  : ",state.auth.token)

        const token = state.auth.token;
        // if (!state.auth.token) return;
        if (!token) return;

           try{
                const response = await fetch(BASE_USER_URL + userLogout, {
                method: 'POST',
                headers: {
                    // "Content-Type": "application/json",
                    // "Authorization" : `Bearer ${state.auth.token}`,
                    Authorization : `Bearer ${token}`,
                },
            
                });
                // console.log ("response", response);
                const data = await response.json();
                // console.log ("data = await response.json()   : ", data); 
                
                return data; //action.payload
        } catch (err){
            console.log ("err = ", err)
                // rejectWithValue ({error: err.message});
                rejectWithValue (err.message)
            }
})