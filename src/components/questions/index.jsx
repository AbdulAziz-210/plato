//

import "./index.css";
import topWaveImg from "../../assets/images/top-wave.png";
import bottomWaveImg from "../../assets/images/bottom-wave.png";
import handeImg from "../../assets/images/hand.svg";
import platoBlack from "../../assets/images/plato-black.svg";

const Questions = () => {
  return (
    <div className="questions-section">
      <img src={topWaveImg} alt="" />
      <div className="questions-folder px-5">
        <div className="questions-wrapper">
          <p className="questions-title text-2xl lg:text-6xl mb-5 lg:mb-10">
            Our door is always open. Love your sample? Have questions? There’s a
            real person to hear what you think on the other side
          </p>
          <img className="questions-img" src={handeImg} alt="" />
          <p className="font-fff questions-text text-base lg:text-lg">
            Hit us up day or night. We want to hear what you think -- questions
            and all.
          </p>
        </div>
      </div>
      <img src={bottomWaveImg} alt="" />

      <div className="questions-wrap px-5">
        <img className="questions-plato-img" src={platoBlack} alt="" />

        <div className=" questions-box">
          {/*  */}
          <div className="questions-wrappppp flex items-center   gap-9 py-8 ">
            <a className="questions-link font-f0" href="">
              Product
            </a>
            <a className="questions-link font-f0" href="">
              Learn
            </a>
            <a className="" href="">
              <button className="questions-btn rounded-full py-2">Shop</button>
            </a>
          </div>
        </div>

        <div className="questions-folderss flex gap-6">
          <a href="" className="font-f0">
            My Account
          </a>
          <a href="" className="font-f0">
            My Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Questions;
