import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Content from "./Content";
import CajaUno from "./CajaUno";
import CajaDos from "./CajaDos";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <main>
      <section>
        <Content />
        <CajaUno />
        <CajaUno />
        <CajaDos />
        <CajaDos />
      </section>
    </main>
  </StrictMode>
);
