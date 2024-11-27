//
import "./index.css";

const Result = () => {
  return (
    <div className="result-section px-5" id="result">
      <div className="result-folder ">
        <div className="result-wrapper">
          <h2 className="font-c text-2xl lg:text-4xl mb-10 m-auto text-center">
            Q: When will I feel results?
          </h2>
          <p className="font-c text-base lg:text-lg mb-5 m-auto text-start">
            A: Most people can tell if Plato is right for them with their first
            few servings.
          </p>
          <p className="font-c text-base lg:text-lg m-auto text-start">
            That’s why we’re happy to send you a sample so you can feel the
            Plato effect instead of us just telling you about it.
          </p>
        </div>
        <h2 className="font-c result-question text-2xl lg:text-4xl m-auto ">
          Q: You make some big claims. How can I believe it?
        </h2>
        <div className="result-wrap">
          <p className="font-c text-base lg:text-lg text-start m-auto mb-5">
            A: We’re glad you asked!
          </p>
          <p className="font-c text-base lg:text-lg text-start m-auto mb-4">
            We spent years on research and hundreds of hours iterating to create
            a product that is safe and evidence-based.
          </p>
          <p className="font-c text-base lg:text-lg text-start m-auto mb-4">
            Every claim we make is based on studies. Every ingredient we use is
            selected because each meets our meticulous standards for safety and
            consistency (meaning we know exactly what is in each capsule).
          </p>
          <p className="font-c text-base lg:text-lg text-start m-auto mb-3">
            You can do your own research by clicking through here to see the
            studies Plato is based on.
          </p>
          <p className="font-c text-base lg:text-lg text-start m-auto">
            But of course, the best way to find out is to experience Plato for
            yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
