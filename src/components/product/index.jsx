//
//
import "./index.css";

import greenTea from "../../assets/images/green-tea.png";
import student from "../../assets/images/student.png";
import greenPlan from "../../assets/images/green-plan.png";
import manImage from "../../assets/images/man-image.png";
import ProductItem from "../product-items";

const Product = () => {
  return (
    <div className="product-section" id="product">
      <div className="container">
        <div className="product-folder">
          <div className="product-wrap m-auto text-center mb-12">
            <h2
              className="product-title  sm:text-5xl  md:text-6xl lg:text-8xl text-5xl mb-11"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              Making it harder to get off task
            </h2>
            <p
              className="product-title-text sm:text-2xl md:text-3xl lg:text-4xl font-c"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              Four safe ingredients to target focus, fatigue, and energy drain
            </p>
          </div>
          <ul className="product-list flex flex-col items-center justify-center">
            <ProductItem
              //img
              images={greenTea}
              imgDelay="1200"
              dataAosImg="fade-right"
              //img
              //div
              dataAos="fade-left"
              dataAosDelay="1000"
              firstText="L-Theanine, 200 mg"
              secondText="the thing in green tea that you love"
              thirdText="Reduces temporary anxiety induced by stressful situations."
              //div
            />
            <ProductItem
              //div
              dataAos="fade-left"
              dataAosDelay="1500"
              firstText="Bacopa Monnieri, 300 mg"
              secondText="a student’s secret weapon"
              thirdText="Improves attention, enhances focus, supports a positive mood."
              //div

              //img
              images={student}
              dataAosImg="fade-right"
              imgDelay="2000"
              //img
              flexRowReverse
            />
            <ProductItem
              //img
              images={greenPlan}
              dataAosImg="fade-right"
              imgDelay="2000"
              //img

              //div
              dataAos="fade-left"
              dataAosDelay="2000"
              firstText="Rhodiola Rosea, 100 mg"
              secondText="the no worries root"
              thirdText="May help reduce cortisol response to stress, support a positive mood, and support concentration."
              //div
            />

            <ProductItem
              //div
              dataAos="fade-left"
              dataAosDelay="2500"
              firstText="Panax Ginseng, 60 mg"
              secondText="helps you stay in a productive flow"
              thirdText="Supports cognitive performance, improves working memory, reduces the perception of mental fatigue."
              //div

              //img
              images={manImage}
              dataAosImg="fade-right"
              imgDelay="2500"
              //img
              flexRowReverse
            />
          </ul>

          <div className="product-btn-wrap gap-4 flex-col lg:flex-row md:flex items-center justify-center text-center">
            <button
              className="product-btn py-3 md:py-5 rounded-full lg:mr-11 mb-3 lg:mb-0"
              data-aos="zoom-out"
            >
              Why These Ingredients
            </button>
            <button
              className="product-btn py-3 md:py-5 rounded-full "
              data-aos="zoom-out"
            >
              See Supplement Facts Label
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
