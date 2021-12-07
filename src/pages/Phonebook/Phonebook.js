import ContactForm from '../ContactForm/ContactForm'
import Filter from '../Filter/Filter'
import ContactsList from '../ContactList/ContactList'
import { useSelector } from "react-redux";


export function  Phonebook () {
    // const  token = useSelector (state  => state.auth.token);
    // console.log (" token =",  token );

    return (
        <div>
            <h2> Contacts : </h2>
            <ContactForm/>
            <Filter/>
            <ContactsList/>   

        </div>
    )
}