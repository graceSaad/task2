import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const ContactMe = () => {
  return (
    <div className="contact-me">
      <h2 className='cm'>Contact Me</h2>
      <ul className="contact-list">
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:youremail@example.com">grace@gmail.com</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:+123456789">+123456789</a>
        </li>
 
      </ul>
    </div>
  );
}

export default ContactMe;
