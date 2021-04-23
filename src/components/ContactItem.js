/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

function ContacItem({ contact }) {
  const history = useHistory();
  const userName = contact.name.first + contact.name.last;
  const handleRedirect = () => {
    history.push(`/${userName}`, [contact]);
  };
  return (
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
          {`${contact.name.first} ${contact.name.last}`}
        </div>
      </div>

    </div>
  );
}

ContacItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  contact: PropTypes.object,
};

export default ContacItem;
