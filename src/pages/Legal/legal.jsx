import React from 'react';
import './legal.scss';

function Legal () {
  return (
    <div className='termsContainer'>
      <h1>Términos y Condiciones</h1>
      <p>
        Bienvenido a TuCasaVacacional. Al utilizar este sitio web, aceptas los siguientes términos y condiciones:
      </p>
      <h2>1. Uso del Sitio Web</h2>
      <p>
        El contenido de este sitio es solo para tu información general y uso personal. Nos reservamos el derecho de modificarlo sin previo aviso.
      </p>
      <h2>2. Propiedad Intelectual</h2>
      <p>
        Todo el contenido del sitio web, incluidos textos, gráficos, logos y diseño, está protegido por derechos de autor y no puede ser utilizado sin autorización.
      </p>
      <h2>3. Responsabilidad</h2>
      <p>
        No nos hacemos responsables de ningún daño directo, indirecto o consecuente derivado del uso de este sitio.
      </p>
      <h2>4. Modificaciones</h2>
      <p>
        Podemos actualizar estos términos en cualquier momento. Revisa esta página periódicamente para estar al día.
      </p>
    </div>
  );
};
export default Legal;