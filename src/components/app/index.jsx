// import { useState } from "react";

//aos ni import qilish start
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//aos ni import qilish end

import "./index.css";
import Header from "../header";
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
import Result from "../result";
import Questions from "../questions";
import Footer from "../footer";

function App() {
  return (
    <>
      <div>
        <Header />
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
        <Result />
        <Questions />
        <Footer />
      </div>
    </>
  );
}

export default App;

// function App() {
//   useEffect(() => {
//     AOS.init({
//       offset: 50,
//       duration: 1000,
//       once: false
//     });
//   }, []);

//   return (
//     <>
//       <div>
//         <Header />
//         <Plato />
//         <About />
//         <Focus />
//         {/* <Product /> */}
//         <Detail />
//         <Capsules />
//         <Time />
//         <Limitless />

//         <Couch />
//         <Cheap />
//         {/* <Purchase /> */}
//         <Result />
//         <Questions />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;
