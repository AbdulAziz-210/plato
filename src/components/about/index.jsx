import "./index.css";

import circleImg from "../../assets/images/circle.png";
import womanImg from "../../assets/images/woman-img.svg";
import manImg from "../../assets/images/man-img.svg";
import girlImg from "../../assets/images/girl-img.svg";

const About = () => {
  return (
    <div className="about-section w-100%" id="about">
      <div className="container">
        <div className="about-wrap pt-7 m-auto text-center">
          <h2 className=" about-title text-3xl xl:text-6xl md:text-5xl sm:text-4xl">
            Busy people love Plato for more energy, better focus, and a feeling
            of calm
          </h2>
        </div>
        <div className="review-wrap">
          <ul className="review-list flex ">
            <li className="review-item">
              <img className="review-img mb-8" src={womanImg} alt="" />
              <p className="review-text pb-3 text-xl">
                "Taking Plato every morning gave me an awesome boost of energy
                for the day. I noticed I was getting less tired, less stressed,
                and was able to manage more. This nootropic is hands down
                awesome. I highly recommend it to anyone looking for more
                energy, mental clarity, better focus, and more zen."
              </p>
              <div className="customer-wrap flex flex-col ">
                <span className="customer-text text-lg ">Daniela S.</span>
                <span className="customer-text text-lg">Verified Customer</span>
              </div>
            </li>
            <li className="review-item">
              <img className="review-img mb-8" src={manImg} alt="" />
              <p className="review-text text-xl">
                "After a week of Plato, my mood has stabilized and I can think
                more clearly. I’m working long hours without relying on
                stimulants, which makes for a smoother transition into the
                evening.”
              </p>
              <div className="customer-wrap flex flex-col">
                <span className="customer-text text-lg ">Dan R.</span>
                <span className="customer-text text-lg">Verified Customer</span>
              </div>
            </li>
            <li className="review-item">
              <img className="review-img mb-8" src={girlImg} alt="" />
              <p className="review-text text-xl">
                "I felt an increase in focus and energy levels while I worked
                long strenuous hours. I also love how it doesn’t upset my
                stomach or make me feel any side effects."
              </p>
              <div className="customer-wrap flex flex-col">
                <span className="customer-text text-lg ">Brittney C.</span>
                <span className="customer-text text-lg">Verified Customer</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
