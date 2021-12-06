import ContactForm from '../ContactForm/ContactForm'
import Filter from '../Filter/Filter'
import ContactsList from '../ContactList/ContactList'

export function  Home () {
    return (
        <div>
            <h2> Home page !!!!</h2>
            <ContactForm/>
            <Filter/>
            <ContactsList/>   

        </div>
    )
}