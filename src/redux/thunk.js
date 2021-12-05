import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_USER_URL = `https://connections-api.herokuapp.com` ;

const userLogin = '/users/login'
const userRegister = '/users/signup'
const userLogout = '/users/logout'
const userCurrent = '/users/current'


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
    console.log ("data", data); //{user: {name: 'Germiona Greinger', email: 'germiona_greinger@gmail.com'}, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…wMTN9.1N76a-NE-wTt5M4UYuFCfkuYIDJsw6Ah-hA2glSRZvY'}
    //"germiona_greinger@gmail.com"
    return data; //action.payload
    } catch (err){
        rejectWithValue ({error: err.message})
    }
})

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
    console.log ("response", response);
    const data = await response.json();
    console.log ("data", data); //{user: {name: 'Germiona Greinger', email: 'germiona_greinger@gmail.com'}, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…wMTN9.1N76a-NE-wTt5M4UYuFCfkuYIDJsw6Ah-hA2glSRZvY'}
    //"germiona_greinger@gmail.com"
    return data; //action.payload
    } catch (err){
        rejectWithValue ({error: err.message})
    }
})