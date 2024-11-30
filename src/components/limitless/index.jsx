//
//
import "./index.css";
import platoImg from "../../assets/images/plato-img.png";

const Limitless = () => {
  return (
    <div className="limitless-section px-5">
      <div className="limitless">
        <div className="limitless-folder flex flex-col items-center justify-center ">
          <p
            className="limitless-title text-4xl sm:text-6xl lg:text-8xl m-auto text-center mb-12"
            data-aos="fade-down"
          >
            No, it’s not like the pill from Limitless
          </p>
          <div className="limitless-wrapper">
            <p
              className="limitless-text text-lg m-auto text-center mb-4"
              data-aos="fade-left"
            >
              Any time you use a supplement, you might wonder if it’s safe.
            </p>
            <p
              className="limitless-text text-lg m-auto text-center mb-5"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              ‘Am I putting the right things in my body?’
            </p>
            <p
              className="limitless-text text-lg m-auto text-center"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              That’s why Plato uses the most conservative ingredients possible
              to get the results that you want.
            </p>
          </div>
          <img className="limitless-img" src={platoImg} alt="" />
          <p
            className="limitless-inner-title text-3xl sm:text-4xl text-center my-12"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Noticeably improve your attention, enhance your focus, and support
            your concentration without the question marks surrounding sourcing
            or safety.
          </p>
          <p
            className="limitless-text limitless-inner-text text-center text-lg mb-3"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Plato is effective, but there’s nothing about it that’s too good to
            be true — just a methodically-researched blend of timeless
            ingredients.
          </p>
          <p
            className="limitless-text limitless-inner-text text-lg mb-12"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Plato works, and there’s research to prove it.
          </p>
          <button className="limitless-btn rounded-full py-5">
            See the Research{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Limitless;
