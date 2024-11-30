//
import "./index.css";

import waveImg from "../../assets/images/wave.png";

const Plato = () => {
  return (
    <>
      <div className="plato-section">
        <div className="plato-wrap container">
          <h1
            className="plato-title inline-block text-4xl sm:text-5xl  md:text-6xl lg:text-7xl mb-9 "
            data-aos="zoom-in"
          >
            More focus. <br />
            Fewer off days.
          </h1>
          <p
            className="plato-text text-xl mb-9 flex-wrap"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            A simple daily habit for staying focused without a crash.
          </p>
          <div className="plato-btns-wrap flex gap-5 ">
            <button className="plato-btn rounded-full py-4  ">
              Try 7 Days for $7
            </button>
            <button className="shop-btn rounded-full py-4 w-48">
              Shop Now{" "}
            </button>
          </div>
        </div>
        <img className="wave-img" src={waveImg} alt="" />
      </div>
    </>
  );
};

export default Plato;
