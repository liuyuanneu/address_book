import React from 'react';

import { useHistory } from "react-router-dom"; 

function ContacItem({contact}) {
    const history = useHistory();
    const userName = contact.name.first + contact.name.last;
    const handleRedirect = () => {
        history.push(`/${userName}`,[contact]);
    }
    return(
        <div 
            className="contactContainer"
            onClick={handleRedirect}
        >
            <img 
                className="avatar"
                alt={contact.name.first} 
                src={contact.picture.large}
            />
            <div className="contactDetail">
                <div className="contactName">
                {contact.name.first + ' '+ contact.name.last}
                </div>
            </div>
 
        </div>
    )
}

export default ContacItem;