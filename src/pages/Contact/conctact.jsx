import React from 'react';
import './contact.scss';
import ContactCard from '../../components/contact/contactcard';

const img ="/assets/experience/aboutUs.jpg";
function Contact() {
  const owner = {
    name1: "Juan",
    phone1: "+34675621904",
    email: "jjalarcon@gmail.com",
    name2: "Alejandra",
    phone2: "+34605116278",
  };
  return (
    <div className="contact-page">
      <h3>Contacto</h3>
      <div className='contact-box'>
        <p>Envía un mensaje por WhatsApp para consultar por disponibilidad y realizar tu reserva. Estamos aquí para ayudarte.</p>
        <ContactCard {...owner} />
      </div>
       
    </div>
  );
}

export default Contact;
