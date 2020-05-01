import React from "react";
import MenuICon from "../assets/grid.svg";
import Logo from "../assets/logo.png";
import EnglishIcon from "../assets/united-kingdom.png";

// SITE MAIN NAVBAR
export default function Navbar() {
  return (
    <div>
      <nav className="uk-navbar-container bg-white p-0 border-bottom">
        <div className="uk-container uk-container-expand">
          <div className="uk-navbar">
            <div className="uk-navbar-left">
              <a className="uk-navbar-item uk-logo logo-font" href="#0">
                <img src={Logo} />
              </a>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav ">
                <li>
                  <a href="#0" className="text-sm">
                    HEROLD MEKS-ADJAKU
                  </a>
                </li>

                <li>
                  <a href="#" className="d-flex text-sm justify-content-center">
                    {" "}
                    <span className="mr-2">
                      <img src={EnglishIcon} />
                    </span>{" "}
                    ENGLISH
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <img src={MenuICon} style={{ fill: "red" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
