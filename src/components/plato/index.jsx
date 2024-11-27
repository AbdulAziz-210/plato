//
import "./index.css";

import waveImg from "../../assets/images/wave.png";
import platoBlack from "../../assets/images/plato-black.svg";
import hamburger from "../../assets/icons/hamburger.svg";

const Plato = () => {
  return (
    <div className="plato-section">
      <div className="plato-wrap container">
        <div>
          <nav className="plato-navbar">
            <a className="font-c" href="">
              <img src={platoBlack} alt="" />
            </a>
            <ul className="plato-list flex itemx-center gap-5 text-xl">
              <li>
                <a className="font-c" href="#about">
                  about
                </a>
              </li>
              <li>
                <a className="font-c" href="#focus">
                  focus
                </a>
              </li>
              <li>
                <a className="font-c" href="#product">
                  product
                </a>
              </li>
              <li>
                <a className="font-c" href="#purchase">
                  purchase
                </a>
              </li>
              <li>
                <a className="font-c" href="#result">
                  result
                </a>
              </li>
              <li>
                <a className="font-c" href="#footer">
                  contact
                </a>
              </li>
            </ul>
            <button>
              <img className="hamburger-img" src={hamburger} alt="" />
            </button>
          </nav>
        </div>
        <h1 className="plato-title inline-block text-4xl sm:text-5xl  md:text-6xl lg:text-7xl mb-9 ">
          More focus. <br />
          Fewer off days.
        </h1>
        <p className="plato-text text-xl mb-9 flex-wrap">
          A simple daily habit for staying focused without a crash.
        </p>
        <div className="plato-btns-wrap flex gap-5 ">
          <button className="plato-btn rounded-full py-4  ">
            Try 7 Days for $7
          </button>
          <button className="shop-btn rounded-full py-4 w-48">Shop Now </button>
        </div>
      </div>
      <img className="wave-img" src={waveImg} alt="" />
    </div>
  );
};

export default Plato;
