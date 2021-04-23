import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function ContacItem({ contact }) {
  const history = useHistory();
  const userName = contact?.name?.first + contact?.name?.last;
  const handleRedirect = () => {
    history.push(`/${userName}`, [contact]);
  };
  return (
    <div
      className="contactContainer"
      onClick={handleRedirect}
    >
      {
      userName
        ? (
          <>
            <img
              className="avatar"
              alt={contact.name.first}
              src={contact.picture.large}
            />
            <div className="contactDetail">
              <div className="contactName">
                {`${contact.name.first} ${contact.name.last}`}
              </div>
            </div>
          </>
        )
        : <p>No Contact</p>
    }
    </div>
  );
}

ContacItem.propTypes = {
  contact: PropTypes.object,
};

export default ContacItem;
