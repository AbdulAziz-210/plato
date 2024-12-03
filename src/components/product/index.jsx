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
          <ul className="product-list ">
            <ProductItem
              images={greenTea}
              dataAos="fade-left"
              dataAosDelay="1000"
              firstText="L-Theanine, 200 mg"
              secondText="the thing in green tea that you love"
              thirdText="Reduces temporary anxiety induced by stressful situations."
              dataAosRight="fade-right"
            />
            <ProductItem
              images={student}
              dataAosRight="fade-right"
              dataAosDelay="1000"
              firstText="Bacopa Monnieri, 300 mg"
              secondText="a student’s secret weapon"
              thirdText="Improves attention, enhances focus, supports a positive mood."
              dataAos="fade-left"
              flexRowReverse
            />

            {/* <li className="product-item  items-center flex-col sm:flex-col md:flex-row lg:flex sm:mb-6 text-center">
              <img
                className="product-img m-auto"
                src={greenTea}
                alt=""
                data-aos="fade-right"
                data-aos-delay="800"
              />
              <div
                className="flex flex-col text-start"
                data-aos="fade-left"
                data-aos-delay="1000"
              >
                <p className="product-text text-lg font-c ">
                  L-Theanine, 200 mg
                </p>
                <p className="product-text text-3xl sm:text-4xl  lg:text-6xl mb-9 font-c">
                  the thing in green tea that you love
                </p>
                <p className="product-text text-lg">
                  Reduces temporary anxiety induced by stressful situations.
                </p>
              </div>
            </li> */}

            {/* <li className="product-item flex-col sm:flex-col md:flex-row lg:flex items-center lg:flex-row-reverse sm:mb-6 text-center">
              <img
                className="product-img m-auto"
                src={student}
                alt=""
                data-aos="fade-left"
                data-aos-delay="1600"
              />
              <div
                className="flex flex-col text-start"
                data-aos="fade-right"
                data-aos-delay="1600"
              >
                <p className="product-text text-lg">Bacopa Monnieri, 300 mg</p>
                <p className="product-text text-3xl sm:text-4xl lg:text-6xl mb-9  ">
                  a student’s secret weapon
                </p>
                <p className="product-text text-lg">
                  Improves attention, enhances focus, supports a positive mood.
                </p>
              </div>
            </li>

            <li className="product-item flex-col sm:flex-col md:flex-row lg:flex items-center sm:flex-col sm:mb-6 text-center">
              <img
                className="product-img m-auto"
                src={greenPlan}
                alt=""
                data-aos="fade-right"
                data-aos-delay="2100"
              />
              <div
                className="flex flex-col text-start"
                data-aos="fade-left"
                data-aos-delay="2100"
              >
                <p className="product-text text-lg">Rhodiola Rosea, 100 mg</p>
                <p className="product-text text-3xl sm:text-4xl lg:text-6xl mb-9">
                  the no worries root
                </p>
                <p className="product-text text-lg">
                  May help reduce cortisol response to stress, support a
                  positive mood, and support concentration.
                </p>
              </div>
            </li>

            <li className="product-item flex-col sm:flex-col md:flex-row lg:flex  items-center lg:flex-row-reverse sm:flex-col sm:mb-6 text-center">
              <img
                className="product-img m-auto"
                src={manImage}
                alt=""
                data-aos="fade-left"
                data-aos-delay="2500"
              />
              <div
                className="flex flex-col text-start"
                data-aos="fade-right"
                data-aos-delay="2500"
              >
                <p className="product-text text-lg">Panax Ginseng, 60 mg</p>
                <p className="product-text text-3xl sm:text-4xl lg:text-6xl mb-9">
                  helps you stay in a productive flow
                </p>
                <p className="product-text text-lg">
                  Supports cognitive performance, improves working memory,
                  reduces the perception of mental fatigue.
                </p>
              </div>
            </li> */}
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
