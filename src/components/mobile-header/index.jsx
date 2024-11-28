//
import "./index.css";
import { useState } from "react";
import platoBlack from "../../assets/images/plato-black.svg";

export default function MobileHeader({ onClose }) {
  const [isFixed, setIsFixed] = useState(true);

  return (
    <>
      {isFixed && (
        <div className="mobile header-wrap container">
          <div className="pages">
            <nav className="header-navbar">
              <ul className="header-list flex itemx-center gap-5 text-xl">
                <li>
                  <a className="font-c" href="#about" onClick={onClose}>
                    about
                  </a>
                </li>
                <li>
                  <a className="font-c" href="#focus" onClick={onClose}>
                    focus
                  </a>
                </li>
                <li>
                  <a className="font-c" href="#product" onClick={onClose}>
                    product
                  </a>
                </li>
                <li>
                  <a className="font-c" href="#purchase" onClick={onClose}>
                    purchase
                  </a>
                </li>
                <li>
                  <a className="font-c" href="#result" onClick={onClose}>
                    result
                  </a>
                </li>
                <li>
                  <a className="font-c" href="#footer" onClick={onClose}>
                    contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
