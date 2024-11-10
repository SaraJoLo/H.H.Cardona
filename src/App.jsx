import React, { useState } from 'react';
import Home from './pages/home'; // Importamos el componente Home

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>App Principal</h1>
      <Home /> {/* Aquí renderizamos el componente Home */}
    </div>
  );
}

export default App;
