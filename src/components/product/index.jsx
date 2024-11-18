//
//
import "./index.css";

import greenTea from "../../assets/images/green-tea.png";
import student from "../../assets/images/student.png";
import greenPlan from "../../assets/images/green-plan.png";
import manImage from "../../assets/images/man-image.png";

const Product = () => {
  return (
    <div className="product-section">
      <div className="container">
        <div className="product-folder">
          <div className="product-wrap m-auto text-center mb-12">
            <h2 className="product-title text-8xl mb-11">
              Making it harder to get off task
            </h2>
            <p className="product-title-text text-4xl font-c">
              Four safe ingredients to target focus, fatigue, and energy drain
            </p>
          </div>
          <ul className="product-list">
            <li className="product-item flex items-center">
              <img className="product-img" src={greenTea} alt="" />
              <div className="flex flex-col">
                <p className="product-text text-lg font-c ">
                  L-Theanine, 200 mg
                </p>
                <p className="product-text text-6xl mb-9 font-c">
                  the thing in green tea that you love
                </p>
                <p className="product-text text-lg">
                  Reduces temporary anxiety induced by stressful situations.
                </p>
              </div>
            </li>

            <li className="product-item  flex items-center flex-row-reverse">
              <img className="product-img" src={student} alt="" />
              <div className="flex flex-col">
                <p className="product-text text-lg">Bacopa Monnieri, 300 mg</p>
                <p className="product-text text-6xl mb-9">
                  a student’s secret weapon
                </p>
                <p className="product-text text-lg">
                  Improves attention, enhances focus, supports a positive mood.
                </p>
              </div>
            </li>

            <li className="product-item flex items-center">
              <img className="product-img" src={greenPlan} alt="" />
              <div className="flex flex-col">
                <p className="product-text text-lg">Rhodiola Rosea, 100 mg</p>
                <p className="product-text text-6xl mb-9">
                  the no worries root
                </p>
                <p className="product-text text-lg">
                  May help reduce cortisol response to stress, support a
                  positive mood, and support concentration.
                </p>
              </div>
            </li>

            <li className="product-item flex items-center flex-row-reverse">
              <img className="product-img" src={manImage} alt="" />
              <div className="flex flex-col">
                <p className="product-text text-lg">Panax Ginseng, 60 mg</p>
                <p className="product-text text-6xl mb-9">
                  helps you stay in a productive flow
                </p>
                <p className="product-text text-lg">
                  Supports cognitive performance, improves working memory,
                  reduces the perception of mental fatigue.
                </p>
              </div>
            </li>
          </ul>

          <div className="product-btn-wrap">
            <button className="product-btn py-5 rounded-full mr-11">
              Why These Ingredients
            </button>
            <button className="product-btn py-5 rounded-full">
              See Supplement Facts Label
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
