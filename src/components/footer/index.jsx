//
import "./index.css";
import lineImg from "../../assets/images/bottom-line.png";

const Footer = () => {
  return (
    <div className="footer-section ">
      <div className="footer-folder px-8">
        <div className="footer-wrapper">
          <div>
            <p className="footer-title text-4xl">Newsletter</p>
            <img src={lineImg} alt="" />

            <p className="footer-text text-sm">
              By subscribing you agree to our. You may unsubscribe at any time.
              Privacy Policy
            </p>
          </div>
          <div className="footer-wrap ">
            <ul className="">
              <li className="">
                <a href="">
                  <button className="footer-btn rounded-full py-2">Shop</button>
                </a>
              </li>
              <li className="mb-3 text-base font-c">
                <a href="#">Blog </a>
              </li>
              <li className="mb-3 text-base font-c">
                <a href="#">Press</a>
              </li>
              <li className="mb-3 text-base font-c">
                <a href="#">Contact</a>
              </li>
              <li className="mb-3 text-base font-c">
                <a href="#">My Account</a>
              </li>
              <li className="mb-3 text-base font-c">
                <a href="#">FAQ</a>
              </li>
              <li className="mb-3 text-base font-c">
                <a href="#">Shipping & Returns</a>
              </li>
              <li className="mb-3 text-base font-c">
                <a href="#">Partner Program</a>
              </li>
              <li className="mb-3 text-base font-c">
                <a href="#">Wholesale Inquiries</a>
              </li>
              <li className="mb-3 text-base font-c">
                <a href="#">Batch Lookup</a>
              </li>
              <li className="text-base font-c">
                <a href="#">Privacy Policy Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ml-12">
            <p className="footer-social font-c text-6xl mb-2">Instagram</p>
            <p className="footer-social font-c text-6xl mb-2">Facebook</p>
            <p className="footer-social font-c text-6xl">Twitter</p>
          </div>
        </div>
        <p className="footer-privacy font-c">
          © 2021,goplato.com <br />
          Design:Sofia Code: No Matter
        </p>
      </div>
      <div className="footer-bottom-wrap flex items-center">
        <button className="footer-bottom-btn font-f0">Got it!</button>
        <p className="font-f0">Learn More</p>
      </div>
    </div>
  );
};

export default Footer;
