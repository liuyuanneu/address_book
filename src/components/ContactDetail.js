import React from 'react';
import {
  useLocation,
  useHistory,
} from 'react-router-dom';

function ContactDetail() {
  const location = useLocation();
  const history = useHistory();
  const contact = location?.state && location.state.length > 0 ? location.state[0] : null;
  return (
    <div className="detailContainer">
      {
        contact ? (
          <div className="cardContainer">
            <div className="cardImage">
              <img
                src={`${contact.picture.large}`}
                alt={`${contact.name.first} ${(contact.name.last)}`}
                className="avatar"
              />
            </div>
            <div className="cardText">
              <h4>
                {`${contact.name.title}. ${contact.name.first} ${contact.name.last}`}
              </h4>
              <div>
                <div>{`Cell: ${contact.cell}`}</div>
                <div>{`Email: ${contact.email}`}</div>
              </div>
              <div className="location">
                <div>
                  {`${contact.location.city}, ${contact.location.state}`}
                </div>
                <div>
                  {`${contact.location.country}`}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>This contact does not exist. </p>
          </div>
        )
      }
      <div className="cardButton">
        <button type="button" onClick={history.goBack}>
          Back to Main Page
        </button>
      </div>
    </div>

  );
}

export default ContactDetail;
