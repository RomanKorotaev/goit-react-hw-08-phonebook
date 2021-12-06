import axios from 'axios'

 import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchContactsV2 = createAsyncThunk (
    'contacts/fetchContacts',
    async ()=> {
        const contacts = await  axios.get ('https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/contacts');
        console.log (" Функция первого запроса fetchContactsV2 = ", fetchContactsV2 )
        console.log (" fetchContactsV2 =  contacts.data = ", contacts.data )
        // return contacts.data;
        return contacts.data;
    } )

export const addContactV2 = createAsyncThunk (
    'contacts/addContact',
    async (newContact)=> {
        const contacts = await  axios.post('https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/contacts', newContact);
        console.log ("Функция добавления контакта:  addContactV2 = ", addContactV2 )
        console.log ("Добавления контакта (что добавили) addContactV2 =  contacts.data", contacts.data)
        return contacts.data;
    } )


export const deleteContactV2 = createAsyncThunk (
    'contacts/deleteContact',
    async (contactId)=> {
        const data = await  axios.delete(`https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/contacts/${contactId}`);
        console.log ("Функция удаления deleteContactV2 = ", deleteContactV2 )
        return contactId;
    } )
