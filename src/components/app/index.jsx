// import { useState } from "react";
import "./index.css";
import Plato from "../plato/index";
import About from "../../components/about/index";
import Focus from "../../components/focus/index";
import Product from "../product";
import Detail from "../detail";
import Capsules from "../capsules";
import Time from "../time";
import Limitless from "../limitless";
import Couch from "../couch";
import Cheap from "../cheap";
import Purchase from "../purchase";

function App() {
  return (
    <>
      <div>
        <Plato />
        <About />
        <Focus />
        <Product />
        <Detail />
        <Capsules />
        <Time />
        <Limitless />
        <Couch />
        <Cheap />
        <Purchase />
      </div>
    </>
  );
}

export default App;
