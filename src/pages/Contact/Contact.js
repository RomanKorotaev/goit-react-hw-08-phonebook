import s from "./Contact.module.css";
import React from "react";


import {deleteContactMY} from '../../redux/actions'

import { connect } from "react-redux";


 function Contact ({name, number, onDelete}) { 

   
        // const {name, number, onDelete} = this.props;
        return ( 
           <div>
                <p> <span> {name} : </span> <span>{number}</span></p >

                <button type="button"
                className ={s.deleteBtn}
                // onClick ={ () => onDeleteContact(id) }
                onClick ={ onDelete } >   Delete </button>
            </div>  
        )
    
}
export default  Contact;
  