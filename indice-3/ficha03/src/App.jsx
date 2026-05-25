import "./App.css";
import React, { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");

  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  return (
    <>
      <input
        onChange={manejarCambio}
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
      />
      <h3>Hola{nombre && `, ${nombre}`}</h3>
    </>
  );
}

export default App;
