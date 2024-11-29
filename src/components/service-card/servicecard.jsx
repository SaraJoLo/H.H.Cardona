import React from 'react';
import './ServiceCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ServiceCard = ({ title, details }) => {
  return (
    <div className="service-card">
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <ul className="service-details">
          {details.map((detail, index) => (
            <li key={index}>
                 <FontAwesomeIcon icon={detail.icon} style={{ fontSize: '12px', marginRight: '0.5rem' }} />
                {detail.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
