import React from 'react';
import './contact.scss';
import ContactCard from '../../components/contact/contactcard';

const Contact = () => {
  const owner = {
    name1: "Juan",
    phone1: "+34675621904",
    email: "jjalarcon@gmail.com",
    name2: "Alejandra",
    phone2: "+34605116278",
  };

  const generateMailToLink = () => {
    const subject = encodeURIComponent("Quiero reservar Holiday Home Cardona");
    const body = encodeURIComponent(
      "Saludos. Quiero reservar Holiday Home Cardona, ¿me daría información sobre el precio y disponibilidad? Gracias!"
    );

    return `mailto:${owner.email}?subject=${subject}&body=${body}`;
  };

  const generateWhatsAppLink = (phoneNumber) => {
    const message = encodeURIComponent(
      "Hola, me gustaría reservar Holiday Home Cardona. ¿Podría darme información sobre el precio y disponibilidad?"
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="contact-page">
      <h3>CONTACTO</h3>
      <div className="contact-box">
        <p>
          Envía un mensaje por WhatsApp o correo para consultar disponibilidad y realizar tu reserva. Estamos aquí para ayudarte.
        </p>
        <ContactCard {...owner} />
      
      </div>

    </div>
  );
};

export default Contact;
