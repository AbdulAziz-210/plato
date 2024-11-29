//
import "./index.css";

import platoBlack from "../../assets/images/plato-black.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import closeImg from "../../assets/icons/close-img.svg";
import { useState } from "react";
import MobileHeader from "../mobile-header";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  console.log(isOpen);

  return (
    <>
      <div className="header-section">
        <header className="site-header">
          <div className="header-wrap container">
            <div className="pages">
              <a className="font-c" href="">
                <img src={platoBlack} alt="" />
              </a>
              <nav className="header-navbar">
                <ul className="header-list flex itemx-center gap-5 text-xl">
                  <li>
                    <a className="font-c" href="#about">
                      about
                    </a>
                  </li>
                  <li>
                    <a className="font-c" href="#focus">
                      focus
                    </a>
                  </li>
                  <li>
                    <a className="font-c" href="#product">
                      product
                    </a>
                  </li>
                  <li>
                    <a className="font-c" href="#purchase">
                      purchase
                    </a>
                  </li>
                  <li>
                    <a className="font-c" href="#result">
                      result
                    </a>
                  </li>
                  <li>
                    <a className="font-c" href="#footer">
                      contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <button
              key={isOpen}
              className="burger-btn"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <img
                className="close-img"
                src={isOpen ? closeImg : hamburger}
                alt="closeImg"
                width={35}
                height={35}
              />
            </button>
          </div>
        </header>
      </div>
      {isOpen && <MobileHeader onClose={onClose} />}
    </>
  );
};

export default Header;
