import React from "react";
import PropTypes from "prop-types";
import "./ContactCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactCard = ({ name1, phone, email, name2, phone2 }) => {
  const whatsappLink = `https://wa.me/${phone}`;
  const mailtoLink = `mailto:${email}`;
  const whatsappLink2 = `https://wa.me/${phone2}`;

  return (
    <div className="contact-card">
      <h2>Alejandra y Juanjo</h2>
      <div className="contact-links">
        <div className="juanyale">
        <p className="name-link" >{name1 + ':'}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card__link contact-card__link--whatsapp">
          <FontAwesomeIcon icon={faWhatsapp}/> 
          <p>
            Enviar mensaje por WhatsApp.
          </p>
        </a>
        <a
          href={mailtoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card__link contact-card__link--email"
        >
          <FontAwesomeIcon icon={faEnvelope}/>
          <p>
            Enviar e-mail.
          </p>
        </a>
        </div>
        <div className="juanyale">
        <p className="name-link">{name2 + ':'}</p>
        <a
          href={whatsappLink2}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card__link contact-card__link--whatsapp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          <p>
            Enviar mensaje por WhatsApp.
          </p>
        </a>
        </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ContactCard;
