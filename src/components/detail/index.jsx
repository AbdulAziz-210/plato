//
import "./index.css";

import purpleWaveImg from "../../assets/images/purple-wave.png";
import bottomPurple from "../../assets/images/bottom-purple.png";

const Detail = () => {
  return (
    <div className="detail-section">
      <img src={purpleWaveImg} alt="" />
      <div className="detail-folder px-5 ">
        <div className="detail-wrapper m-auto pb-12 ">
          <h2 className="detail-title text-3xl  md:text-5xl lg:text-6xl text-center">
            Two Capsules Daily:
          </h2>
          <p className="detail-bottom-title text-3xl md:text-5xl lg:text-6xl text-center ">
            Smart self care to reduce the symptoms of stress and help you focus
          </p>
        </div>
        <div className="detail-text-wrap mb-6 ">
          <p className="detail-text text-lg mb-5">
            Your happiness (and ability to focus) are impacted by the amount of
            stress you experience. In the same way, negative feelings can
            contribute to physical and chemical stress in the body and brain.
          </p>
          <p className="detail-text text-lg mb-3">
            If you don’t have infinite control over your circumstances -- and
            who does? -- you can end up feeling trapped.
          </p>
          <p className="detail-text text-lg mb-4">
            It can feel like you can never get ahead, and never get out from
            under your stress.
          </p>
          <p className="detail-text text-lg ">
            Plato is a simple, daily ritual to help interrupt that cycle.
          </p>
        </div>
        <button className="detail-btn rounded-full py-5 "> Learn More</button>
      </div>
      <img src={bottomPurple} alt="" />
    </div>
  );
};

export default Detail;
