//
//
import "./index.css";
import topImg from "../../assets/images/top-purple.png";
import timeImg from "../../assets/images/time-number.png";
import boldBottomImg from "../../assets/images/bottom-bold-purple.png";

const Time = () => {
  return (
    <div className="time-section">
      <img src={topImg} alt="" />
      <div className="time-wrapper">
        <p className="time-title text-6xl m-auto text-center pb-12">
          You could spend thousands of hours researching the perfect safe
          solution, but we already did
        </p>
        <div className="time-folder">
          {/* <span className="time-numbers text-8xl">3</span>
            <span className="time-numbers text-8xl">30</span>
            <span className="time-numbers text-8xl">4</span>
            <span className="time-numbers text-8xl">18</span> */}
        </div>
        <img className="time m-auto" src={timeImg} alt="" />
      </div>
      <img className="time-img" src={boldBottomImg} alt="" />
    </div>
  );
};

export default Time;
