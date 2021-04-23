import React, { useEffect, useRef, useCallback } from 'react';

import ContacItem from './ContactItem';
import { useSelector, useDispatch } from 'react-redux';

import { 
    selectContacts, 
    fetchContacts,
    filterContacts,
} from '../redux/contactSlice';


function ContactList(){
    const observer = useRef()
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filteredContacts = useSelector(filterContacts);
    const status = useSelector(state => state.contact.status);
    const error = useSelector(state => state.contact.error);
    const amount = useSelector(state => state.contact.amount)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchContacts(amount))
        }
    }, [status, dispatch])

    const lastContactRef = useCallback(node => {
        if (status === 'loading') return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                dispatch(fetchContacts(amount));
            }
        },[]);
        if (node) observer.current.observe(node)
    })

    return (
        <div className="listContainer">
            
            {
                filteredContacts.length > 0 ? filteredContacts.map((person,i) => 
                    <div className="wrapper" key={i}>
                        <ContacItem key={i} contact={person} />
                    </div>
                ): 
                <>
                    {
                        contacts.map((person,i) =>{
                            if(i === contacts.length-1){
                                return <div className="wrapper" ref={lastContactRef} key={i} ><ContacItem  contact={person}/></div>
                            }else{
                                return <div className="wrapper" key={i}><ContacItem key={i} contact={person} /></div>
                            }
                        })
                    }
                </>
            }
            <div>{status === 'loading' && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
            
        </div>
    )
}

export default ContactList;