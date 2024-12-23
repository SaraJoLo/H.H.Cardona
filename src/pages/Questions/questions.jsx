import React from "react";
import { Link } from "react-router-dom";
import './questions.scss';

function Questions() {
    return (
        <div className="questions-container">
        <><section className="asks">
            <h1>PREGUNTAS FRECUENTES</h1>
            <div className="ask">
                <h2>¿Cómo realizo mi reserva?</h2>
                <p>Para realizar tu reserva, puedes hacerlo a través de la web, llamando o enviando un mensaje a los propietarios.</p>
                <h2>¿Cuál es el horario de entrada (check-in) y chde salida (check-out) ?</h2>
                <p>✓ Check-in de 15:00 a 19:00 ✓ Check-out hasta las 12:00
                    Si quieres hacer el check-in o el check-out antes o después de lo habitual, puedes hacer una petición especial en el momento de reservar.
                    Ten en cuenta que las peticiones especiales no se pueden garantizar. Si hacer el check-in o el check-out antes o después de lo habitual es fundamental para tus planes de viaje, te recomendamos que consultes las opciones de cancelación antes de reservar</p>
                <h2>¿Cuántas personas pueden hospedarse en Holiday Home Cardona?</h2>
                <p> La casa cuenta con: <br />Dormitorio 1:  1 cama doble
                    Dormitorio 2:  1 cama doble
                    Dormitorio 3:  1 cama doble
                    Dormitorio 4:  3 camas individuales y  1 cama doble. <br />En total entran 12 adultos.</p>
                <h2>¿Se admiten mascotas?</h2>
                <p>Si! mientras sea cuidadoso y responsable su dueño con respecto al cuidado de los elementos del hogar y limpieza.</p>
                <h2>¿A qué distancia esta Holiday Home Cardona del centro de Lloret del Mar?</h2>
                <p>Se encuentra a 15 min. en coche, 50 min. en bus y 1h caminando aproximadamente.</p>
                <h2>¿Qué se puede hacer en Holiday Home Cardona?</h2>
                <p>En el hogar se encuentran diversos juegos tanto para niños como para adultos, desde juegos de mesa hasta juegos en el jardín (piscina/futbolín/cama elástica) y además senderismo!</p>
                <h2>¿Cuánto cuesta alojarse en Holiday Home Cardona?</h2>
                <p>Los precios en Holiday Home Bocage by Interhome pueden variar en función de la estancia (fechas, condiciones del hotel, etc.). Elige tus fechas para ver el precio.</p>

            </div>
        </section>
            <section className="rules">
                <h1>NORMAS DE LA CASA</h1>
                <div className="rules">
                    <h2>Entrada y salida</h2>
                    <p>Entrada
                        De las 15:00 a las 19:00
                        Los clientes deben mostrar un documento de identidad con fotografía y una tarjeta de crédito en el momento de hacer el check-in
                        Tienes que decirle al alojamiento con antelación a qué hora vas a llegar.
                        Salida
                        De las 10:00 a las 12:00</p>
                </div>
                <h2>Condiciones para estancias con niños</h2>
                <p>Se pueden alojar niños de cualquier edad.
                    Los niños a partir de 16 años pagan como adultos en este alojamiento.

                    Cuna a petición : € 10 por niño y noche (2 - 11 años)
                    Cama supletoria a petición : € 15 por niño y noche (+ 12 años)
                    Cama supletoria a petición: € 20 por persona y noche

                    El precio de las cunas y las camas supletorias no está incluido en el precio total y se tiene que pagar por separado durante la estancia.
                    El número de camas supletorias y cunas permitido depende de la opción que escojas. Consulta la opción que has escogido para saber más.
                    Todas las cunas y camas supletorias están sujetas a disponibilidad..</p>
                <h2>Condiciones sobre eventos</h2>
                <p>No se pueden celebrar fiestas/eventos
                    Horario sin ruido
                    En este alojamiento no se pueden celebrar despedidas de soltero o soltera ni fiestas similares.
                    Este alojamiento está situado en una zona residencial, por lo que se pide a los clientes no hacer demasiado ruido.
                    No se puede hacer ruido de 23:00:00 a 08:00:00.</p>
            </section></>
            </div>

    );
};

export default Questions;