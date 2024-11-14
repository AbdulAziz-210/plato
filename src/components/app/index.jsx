// import { useState } from "react";
import "./index.css";
import Plato from "../plato/index";
import About from "../../components/about/index";
import Focus from "../../components/focus/index";
import Product from "../product";
import Detail from "../detail";

function App() {
  return (
    <>
      <div>
        <Plato />
        <About />
        <Focus />
        <Product />
        <Detail />
      </div>
    </>
  );
}

export default App;
