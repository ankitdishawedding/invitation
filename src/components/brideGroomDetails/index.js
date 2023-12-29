import React from "react";
import Bride from "../../assets/images/ankit_tyagi.jpg";
import Groom from "../../assets/images/ankit_tyagi.jpg";
import data from "../../ssr.json";

function Bridegroom() {
  const { groomName, sonOf } = data["groomDetails"];
  const { brideName, daughterOf } = data["brideDetails"];

  return (
    <div id="couple" className="bridegroom clear section-padding bg-pink">
      <div className="container">
        <div className="row mb-60">
          <div className="col-md-6">
            <div
              className="item to right mb-30 animate-box bg-[#FBF8F2] rounded-lg"
              data-animate-effect="fadeInLeft"
            >
              <div className="img">
                {" "}
                <img src={Bride} alt="" />{" "}
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    {groomName}
                    <i className="ti-heart"></i>
                  </h6>{" "}
                  <span>Groom</span>
                  <p>Son of {sonOf}</p>
                  <div className="social">
                    <div className="full-width">
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-twitter"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-instagram"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="item mb-30 animate-box bg-[#FBF8F2] rounded-lg"
              data-animate-effect="fadeInRight"
            >
              <div className="img">
                {" "}
                <img src={Groom} alt="" />{" "}
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    {brideName} <i className="ti-heart"></i>
                  </h6>{" "}
                  <span>Bride</span>
                  <p>{daughterOf}</p>
                  <div className="social">
                    <div className="full-width">
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-facebook"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-twitter"></i>{" "}
                      </a>
                      <a href="#0" className="icon">
                        {" "}
                        <i className="ti-instagram"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 text-center animate-box"
            data-animate-effect="fadeInUp"
          >
            <h3 className="oliven-couple-title">Are getting married!</h3>
            <h4 className="oliven-couple-subtitle">
              14th February, 2024 – Ghaziabad,UP
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
