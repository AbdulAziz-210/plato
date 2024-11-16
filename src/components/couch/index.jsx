//

import "./index.css";
import purplecircle from "../../assets/images/purple-circle.png";

const Couch = () => {
  return (
    <div className="couch-section">
      <div className="couch-folder">
        <div className="couch-wrapper">
          <img className="couch-img" src={purplecircle} alt="" />
          <p className="couch-title text-6xl text-center mb-11">
            Get off the couch <br /> and _______
          </p>
          <p className="couch-text  text-lg text-center m-auto mb-6">
            Plato supports steady energy and focus, so you can get the things on
            your list done. No stimulants means that you won’t have the same
            crash that you would from caffeine.
          </p>
          <p className="couch-text text-center m-auto">
            Whether it’s finishing up your work for the day and going on a run,
            or hanging out with friends after what normally would be a draining
            day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Couch;
