import React from 'react';

import Avatar from '@material-ui/core/Avatar';



function ContacItem({contact}) {
    return(
        <div className="contactContainer">
            <img 
                className="avatar"
                alt={contact.name.first} 
                src={contact.picture.large}
            />
            <div className="contactDetail">
                <div>
                    <p>{contact.name.first}</p>
                    <p>{contact.name.last}</p>
                    
                </div>
            </div>
 
        </div>
    )
}

export default ContacItem;