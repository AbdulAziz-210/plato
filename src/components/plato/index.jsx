import "./index.css";

import waveImg from "../../assets/images/wave.png";

const Plato = () => {
  return (
    <div className="plato-section">
      <div className="plato-wrap container">
        <h1 className="plato-title inline-block text-8xl mb-9 ">
          More focus. <br />
          Fewer off days.
        </h1>
        <p className="plato-text text-xl mb-9 ">
          A simple daily habit for staying focused without a crash.
        </p>
        <button className="plato-btn rounded-full py-4 mr-6">
          Try 7 Days for $7
        </button>
        <button className="shop-btn rounded-full py-4 ">Shop Now </button>
      </div>
      <img className="wave-img" src={waveImg} alt="" />
    </div>
  );
};

export default Plato;
