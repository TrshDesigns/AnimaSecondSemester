import "./App.css";
import React, { useState } from "react";

function Formextra() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const manejarSubmit = (e) => {
    e.preventDefault();
    setMostrar(true);
    alert(`Formulario enviado. Título: ${titulo}`);
  };

  return (
    <>
      <div>
        <h2>Formulario extra</h2>
        <form onSubmit={manejarSubmit}>
          <input
            type="text"
            placeholder="Tu título"
            value={titulo}
            onChange={(e) => {
              setTitulo(e.target.value);
              setMostrar(false);
            }}
          />
          <input
            type="text"
            placeholder="Coloca tu descripción"
            value={descripcion}
            onChange={(e) => {
              setDescripcion(e.target.value);
              setMostrar(false);
            }}
          />
          <button type="submit">Enviar</button>
        </form>
        <hr />
        {mostrar && (
          <div className="tarjeta">
            <h3>Información subida</h3>
            <p>
              <strong>Título:</strong> {titulo}
            </p>
            <p>
              <strong>Descripción:</strong> {descripcion}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Formextra;
