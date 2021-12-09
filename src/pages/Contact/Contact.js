import s from "./Contact.module.css";
import React from "react";

 function Contact ({name, number, onDelete}) { 

        return ( 
           <div>
                <p> <span> {name} : </span> <span>{number}</span></p >

                <button type="button"
                className ={s.deleteBtn}
                onClick ={ onDelete } >   Delete </button>
            </div>  
        )
    
}
export default  Contact;
  