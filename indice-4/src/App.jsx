import { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import Header from "./components/Header.jsx";

import "./App.css";

function App() {
  const productos = [
    {
      id: 1,
      nombre: "NeuralAxisV0",
      precio: 100,
      descripcion:
        "Un dispositivo de gama de entrada al mundo de la cyberconexion",
    },
    {
      id: 2,
      nombre: "NeuraXv1",
      precio: 150,
      descripcion:
        "El mejor balance entre calidad y velocidad para tu intereconexion en el cyberspace",
    },
    {
      id: 3,
      nombre: "Neuraband X",
      precio: 50,
      descripcion:
        "Para los amantes del fitness que buscan la mejor calidad precio y una buena experiencia de entrada",
    },
  ];

  return (
    <>
    <div>
      <main>
        <Header></Header>
        <ProductList></ProductList>
      </main>
    </div>
    </>
  );
}

export default App;
