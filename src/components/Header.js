import React, { useRef } from "react";
import data from "../ssr.json";

function Header({ setPlay, play, handlePlay, song }) {
  const ref = useRef(0);

  const { heading, placeAndDate } = data["homePage"];
  return (
    <header
      id="home"
      className="header valign bg-img parallaxie"
      onClick={() => {
        if (ref.current === 0) {
          handlePlay("home");
          ref.current = 1;
        }
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center caption">
            <h1 className="animate-box" data-animate-effect="fadeInUp">
              {heading}
            </h1>
            <h5 className="animate-box" data-animate-effect="fadeInUp">
              {placeAndDate}
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="arrow bounce text-center">
              <a href="#couple">
                {" "}
                <i className="ti-heart"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
