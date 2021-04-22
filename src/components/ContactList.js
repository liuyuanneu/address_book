import React, { useEffect } from 'react';

import ContacItem from './ContactItem';
import { useSelector, useDispatch } from 'react-redux';

import { 
    selectContacts, 
    fetchContacts 
} from '../redux/contactSlice';


function ContactList(){
    const dispatch = useDispatch()
    const contacts = useSelector(selectContacts)

    const status = useSelector(state => state.contact.status)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchContacts())
        }
    }, [status, dispatch])
    return(
        <div className="listContainer">
            {
                contacts.length > 0 ? 
                contacts.map((person,i) => 
                    <ContacItem key={i} contact={person}/>
                ):null
            }
        </div>
    )
}

export default ContactList;