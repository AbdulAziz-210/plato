//
import "./index.css";
import purpleWaveImg from "../../assets/images/purple-wave.png";
import bottomPurple from "../../assets/images/bottom-purple.png";

import repeat from "../../assets/images/repeat.png";

const Focus = () => {
  return (
    <div className="focus-section" id="focus">
      <img src={purpleWaveImg} alt="purpleWaveImg" />
      <div className="focus-folder">
        <div className="focus-wrap m-auto text-center flex flex-col items-center ">
          <h2
            className="focus-title lg:text-6xl md:text-4xl text-3xl pb-3"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Inability to focus can ripple into many areas of life, creating a
            vicious cycle
          </h2>
          <img className="pb-4 pt-3" src={repeat} alt="" />
          <p className="focus-text text-lg mb-6">
            Plato is a natural, safe, daily habit to help you get out of this
            cycle.
          </p>
        </div>
      </div>
      <img src={bottomPurple} alt="" />
    </div>
  );
};

export default Focus;
