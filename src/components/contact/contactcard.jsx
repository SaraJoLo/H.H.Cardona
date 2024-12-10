import React from "react";
import PropTypes from "prop-types";
import "./ContactCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactCard = ({ name1, phone1, email, name2, phone2 }) => {
  const generateWhatsAppLink = (phone) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(
      "Hola, me gustaría reservar Holiday Home Cardona. ¿Podría darme información sobre el precio y disponibilidad?"
    )}`;

  const generateMailToLink = () =>
    `mailto:${email}?subject=${encodeURIComponent(
      "Quiero reservar Holiday Home Cardona"
    )}&body=${encodeURIComponent(
      "Saludos. Quiero reservar Holiday Home Cardona, ¿me daría información sobre el precio y disponibilidad? Gracias!"
    )}`;

  return (
    <div className="contact-card">
      <h2>Juan y Alejandra</h2>
      <div className="contact-links">
        <div className="contact-section">
          <p className="name-link">{name1}:</p>
          <a
            href={generateWhatsAppLink(phone1)}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card__link contact-card__link--whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <p>Enviar mensaje por WhatsApp</p>
          </a>
          <a
            href={generateMailToLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card__link contact-card__link--email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Enviar e-mail</p>
          </a>
        </div>

        <div className="contact-section">
          <p className="name-link">{name2}:</p>
          <a
            href={generateWhatsAppLink(phone2)}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card__link contact-card__link--whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <p>Enviar mensaje por WhatsApp</p>
          </a>
        </div>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  name1: PropTypes.string.isRequired,
  phone1: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name2: PropTypes.string.isRequired,
  phone2: PropTypes.string.isRequired,
};

export default ContactCard;
