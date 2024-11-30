//
import "./index.css";

const Cheap = () => {
  return (
    <div className="cheap-section px-5">
      <div className="cheap-folder">
        <div className="cheap-wrapper flex flex-col ">
          <h2
            className="cheap-title text-3xl sm:text-5xl lg:text-6xl text-center m-auto"
            data-aos="fade-down"
          >
            Costs less than a cup of coffee, with short-and-long term cognitive
            benefits
          </h2>
          <p className="cheap-text text-lg  m-auto mb-4" data-aos="fade-right">
            Plato costs less than a cup of coffee, but can give you short-term
            and long-term brain benefits.
          </p>
          <p className="cheap-text text-lg  m-auto mb-4" data-aos="fade-left">
            When taking Plato consistently, many people notice increased focus,
            energy, and relaxation within the first few servings. And it only
            gets better with time, which is why we recommend that you use Plato
            every day.
          </p>
          <p className="cheap-text text-lg  m-auto mb-4" data-aos="fade-right">
            Plato is well-tolerated, non-toxic, non-habit-forming and does not
            need to be cycled.
          </p>
          <p className="cheap-text text-lg  m-auto" data-aos="fade-left">
            It’s one of the safest, easiest additions to your routine that you
            can invest in, and can help you get to a baseline of calm and
            clarity so you can tackle life head on.
          </p>
          <button className="cheap-btn rounded-full py-3 lg:py-5 m-auto text-center">
            Get Plato Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cheap;
