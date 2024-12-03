//
import "./index.css";
import lineImg from "../../assets/images/bottom-line.png";
//
import platoBlack from "../../assets/images/plato-black.svg";

const Footer = () => {
  return (
    <div className="footer-section " id="footer">
      <div className="">
        <div className="footer-top-wrap   px-11 pb-5 lg:pb-0 h-24   mb-8">
          <img className="mt-5" src={platoBlack} alt="" />

          <div className="footer-link-folder">
            <ul className="footer-list ">
              <li data-aos="fade-down">
                <a className="font-f0" href="">
                  Product
                </a>
              </li>
              <li data-aos="fade-up">
                <a className="font-f0" href="">
                  Learn
                </a>
              </li>
              <li data-aos="fade-down">
                <a className="font-c" href="">
                  <button className="footer-top-btn py-2">Shop</button>
                </a>
              </li>
            </ul>

            <div className="footer-link-wrap" data-aos="fade-down">
              <a className="font-f0 mr-12" href="">
                My Account
              </a>
              <a className="font-f0" href="">
                My Cart
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-folder px-8 ">
        <div className="footer-wrapper">
          <div className="mb-2 lg:mb-5">
            <p className="footer-title text-4xl">Newsletter</p>
            <img src={lineImg} alt="" />

            <p className="footer-text text-sm">
              By subscribing you agree to our. You may unsubscribe at any time.
              Privacy Policy
            </p>
          </div>
          <div className="footer-wrap mb-5 ">
            <ul className=" ml-9 lg:ml-0">
              <li className="">
                <a href="">
                  <button className="footer-btn rounded-full py-2">Shop</button>
                </a>
              </li>
              <li className="mb-3 text-base font-c" data-aos="fade-right">
                <a href="#">Blog </a>
              </li>
              <li className="mb-3 text-base font-c" data-aos="fade-left">
                <a href="#">Press</a>
              </li>
              <li className="mb-3 text-base font-c" data-aos="fade-right">
                <a href="#">Contact</a>
              </li>
              <li className="mb-3 text-base font-c" data-aos="fade-left">
                <a href="#">My Account</a>
              </li>
              <li className="mb-3 text-base font-c" data-aos="fade-right">
                <a href="#">FAQ</a>
              </li>
              <li className="mb-3 text-base font-c" data-aos="fade-left">
                <a href="#">Shipping & Returns</a>
              </li>
              <li className="mb-3 text-base font-c" data-aos="fade-right">
                <a href="#">Partner Program</a>
              </li>
              <li className="mb-3 text-base font-c" data-aos="fade-left">
                <a href="#">Wholesale Inquiries</a>
              </li>
              <li className="mb-3 text-base font-c" data-aos="fade-right">
                <a href="#">Batch Lookup</a>
              </li>
              <li className="text-base font-c" data-aos="fade-left">
                <a href="#">Privacy Policy Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:ml-12 mb-11">
            <p
              className="footer-social font-c text-3xl lg:text-6xl mb-2"
              data-aos="fade-left"
            >
              Instagram
            </p>
            <p
              className="footer-social font-c text-3xl lg:text-6xl mb-2"
              data-aos="fade-right"
            >
              Facebook
            </p>
            <p
              className="footer-social font-c text-3xl lg:text-6xl"
              data-aos="fade-left"
            >
              Twitter
            </p>
          </div>
        </div>
        <p className="footer-privacy font-c" data-aos="fade-right">
          © 2021,goplato.com <br />
          Design:Sofia Code: No Matter
        </p>
      </div>

      <div className="footer-bottom-wrap flex items-center ">
        <button className="footer-bottom-btn font-f0 ">Got it!</button>
        <p className="font-f0">Learn More</p>
      </div>
    </div>
  );
};

export default Footer;
