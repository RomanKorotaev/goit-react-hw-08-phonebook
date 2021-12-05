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
const response = await fetch(BASE_USER_URL+userRegister, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
    });
    console.log (response);
    } catch (err){

    }
})