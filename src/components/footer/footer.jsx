import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer () {
  return (
    <footer className="footerBox">
      <div className="footerContent">
        <p className="footerText">© 2024 TuCasaVacacional. Todos los derechos reservados.</p>
        <nav className="footerNav">
          <a href="/legal" className="footerLink">Aviso de Privacidad</a>
          <a href="/legal" className="footerLink">Términos y Condiciones</a>
          <a href="/legal" className="footerLink">Política de Cookies</a>
          <a href="/contact" className="footerLink">Contacto</a>
        </nav>
        <div className="socialIcons">
          <a
            href="https://www.instagram.com/holidayhomecardona/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          ><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="/contact" className="social-link"><FontAwesomeIcon icon={faEnvelope}/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
