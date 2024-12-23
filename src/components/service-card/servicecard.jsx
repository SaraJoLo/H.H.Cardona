import React from 'react';
import './ServiceCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ServiceCard = ({ title, image, details }) => {
  return (
    <div className="service-card" style={{backgroundImage:`url(${image})`}}>
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <ul className="service-details">
          {details.map((detail, index) => (
            <li key={index}>
                 <FontAwesomeIcon icon={detail.icon} />
                {detail.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="background-overlay"></div>
    </div>
  );
};

export default ServiceCard;
