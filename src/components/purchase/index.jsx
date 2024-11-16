//
//

import "./index.css";

import purpleWaveImg from "../../assets/images/purple-wave.png";
import bottomPurple from "../../assets/images/bottom-purple.png";
import handImg from "../../assets/images/medicine-and-hand.png";
import square from "../../assets/images/square.svg";

const Purchase = () => {
  return (
    <div className="purchase-section">
      <img src={purpleWaveImg} alt="" />
      <div className="purchase-folder">
        <div className="purchase-wrapper">
          <h2 className="purchase-title text-8xl m-auto text-center">
            7 Days for $7
          </h2>
          <p className="purchase-text text-4xl m-auto text-center">
            First Time Purchase Offer
          </p>
        </div>

        <div className="flex gap-12">
          <img src={handImg} alt="" />
          <div>
            <p className="purchase-next-text text-lg mb-9">
              We’re so confident you’ll love Plato that we’re willing to give it
              to you for next to nothing so that you can find out if it’s right
              for you.
            </p>
            <p className="purchase-next-text text-lg mb-9">
              No hidden extra fees, commitment or costs. Shipping is on us!
            </p>
            <p className="purchase-next-text text-lg mb-11">
              Once you feel the difference for yourself, then you can invest in
              a full month’s supply.
            </p>

            <strong className="purchase-strong text-2xl flex items-center justify-center mb-4">
              Send My Sample Pack:
            </strong>
            <button className="purchase-btn rounded-full py-4 flex items-center justify-center m-auto">
              Add to Cart | $7
            </button>
            <button className="purchase-btns rounded-full py-4 flex items-center justify-center m-auto mb-6">
              Shop All Options{" "}
            </button>
            <img className="purchase-img" src={square} alt="" />
            <span className="purchase-span text-lg flex items-center justify-center m-auto">
              Free shipping on every order (even when it’s only $7)
            </span>
          </div>
        </div>
      </div>
      <img src={bottomPurple} alt="" />
    </div>
  );
};
export default Purchase;
