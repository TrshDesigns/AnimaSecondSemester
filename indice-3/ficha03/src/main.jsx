import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Form from "./Form.jsx";
import Formextra from "./Formextra.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Form></Form>
    <Formextra></Formextra>
  </StrictMode>,
);
