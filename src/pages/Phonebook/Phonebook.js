import ContactForm from '../ContactForm/ContactForm'
import Filter from '../Filter/Filter'
import ContactsList from '../ContactList/ContactList'

export function  Phonebook () {
    return (
        <div>
            <h2> Contacts : </h2>
            <ContactForm/>
            <Filter/>
            <ContactsList/>   

        </div>
    )
}