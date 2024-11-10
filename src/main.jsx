import React from 'react';
import ReactDOM from 'react-dom/client'; // Necesario para React 18
import App from './App'; // Importamos el componente principal de la app

const root = ReactDOM.createRoot(document.getElementById('app')); // Montamos la app en el div con id="app"
root.render(<App />); // Renderizamos el componente App
