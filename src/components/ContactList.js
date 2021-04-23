import React, { useState, useEffect } from 'react';

import ContacItem from './ContactItem';
import { useSelector, useDispatch } from 'react-redux';

import { 
    selectContacts, 
    fetchContacts 
} from '../redux/contactSlice';


function ContactList(){
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const status = useSelector(state => state.contact.status);
    const error = useSelector(state => state.contact.error);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchContacts())
        }
    }, [status, dispatch])

    
    switch(status) {
        case 'failed':
            return <div>{error}</div>
        case 'loading':
            return <p>Loading...</p>
        default:
            return <div className="listContainer">
                {
                    contacts.map((person,i) => 
                    <ContacItem 
                        key={i} 
                        contact={person}
                    />)
                }
            
            </div>
    }
    
    
    // return(
    //     <div className="listContainer">
    //         {
    //             status === 'failed' ? 
    //             <div>{error}</div>:
    //             <div>
    //             {
    //                 contacts.length > 0 ? 
    //                 :<p>Loading...</p>
    //             }
    //             </div>
    //         }
            
    //     </div>
    // )
}

export default ContactList;