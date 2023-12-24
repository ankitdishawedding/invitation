import React from "react";

import data from "../../ssr.json";
import Carousel from "./carousel";

function Bridegroom() {
  const { brideName, daughterOf } = data["brideDetails"];
  const { groomName, sonOf } = data["groomDetails"];

  const data1 = [
    { id: 1, imgUrl: "ankit_tyagi.jpg" },
    { id: 2, imgUrl: "ankit_papa.jpeg" },
    { id: 5, imgUrl: "ankit_mom.jpeg" },
    { id: 3, imgUrl: "ankit_sister.jpeg" },
    { id: 4, imgUrl: "ankit_jiju.jpeg" },
  ];

  return (
    <div id="couple" className="bridegroom clear section-padding bg-pink">
      <div className="container">
        {/* <div className="row mb-60">
          <div className="col-md-6">
            <div
              className="item toright mb-30 animate-box"
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
                  <span>The Groom</span>
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
              className="item mb-30 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="img">
                {" "}
                <img src={Groom} alt="" />{" "}
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    {brideName}
                    <i className="ti-heart"></i>
                  </h6>{" "}
                  <span>The Bride</span>
                  <p>Daughter of {daughterOf} </p>
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
        </div> */}
        <div className="flex flex-col md:flex-row justify-evenly gap-4 ">
          {/* <Carousel cardsData={data1} />
          <Carousel cardsData={data1} /> */}
          {/* <Carousel /> */}
        </div>

        <div className="row">
          <div
            className="col-md-12 text-center animate-box"
            data-animate-effect="fadeInUp"
          >
            <h3 className="oliven-couple-title">Are getting married!</h3>
            <h4 className="oliven-couple-subtitle">
              November 21st, 2021 — Meerut, Uttar Pradesh
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
