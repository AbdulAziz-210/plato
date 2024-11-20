//
//
import "./index.css";

import capsuleImg from "../../assets/images/capsules.png";

const Capsules = () => {
  return (
    <div className="capsules-section">
      <div className="container">
        <div className="capsules-folder flex items-center justify-center lg:gap-11">
          <img src={capsuleImg} alt="" />
          <div className="capsules-wrap ">
            <p className="capsules-text text-4xl sm:text-5xl  lg:text-8xl   mb-8">
              {" "}
              2 capsules of Plato
            </p>
            <p className="capsules-text text-lg mb-3">
              Not only does Plato help you adapt to stressful situations, it can
              help give you the energy and focus to make other positive changes
              in your life, beginning an upward cycle of change.
            </p>
            <p className="capsules-text text-lg mb-10">
              Make the first move towards a new base level of calm with Plato.
            </p>
            <button className="capsules-btn rounded-full py-5">
              Take the First Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capsules;
