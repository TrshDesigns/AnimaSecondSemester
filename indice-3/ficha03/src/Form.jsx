import "./App.css";
import React, { useState } from "react";

function Form() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const manejarSubmit = (e) => {
    e.preventDefault();
    setMostrar(true);
    setEdad(edad);

    alert(`Formulario enviado. Nombre: ${nombre}, Edad: ${edad}`);
  };

  return (
    <>
      <div>
        <h2>Formulario</h2>
        <form onSubmit={manejarSubmit}>
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="number"
            placeholder="coloca tu edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          ></input>
          <button type="submit">Enviar</button>
        </form>
        <hr />
        {mostrar && (
          <div>
            <h3>Informacion subida</h3>
            <h3>
              Nombre:{nombre && `, ${nombre}`} Edad: {edad && `, ${edad}`}
            </h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Form;
