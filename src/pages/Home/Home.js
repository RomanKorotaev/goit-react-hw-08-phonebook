import ContactForm from '../ContactForm/ContactForm'
import Filter from '../Filter/Filter'
import ContactsList from '../ContactList/ContactList'
import s from './Home.module.css'

import phoneBookImg from '../../image/phone_book_2.svg'

export function  Home () {
    return (
        <div>
            <h2 className={s.homePageTitle}> Wellcome to Phonebook application! </h2>
            <img className={s.phoneBookImgStyle} src={phoneBookImg} alt="picture of phonebook"/>
        </div>
    )
}