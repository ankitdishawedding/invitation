import React from "react";
import Bride from "../../assets/images/ankit_tyagi.jpg";
import Groom from "../../assets/images/ankit_tyagi.jpg";

function Bridegroom() {
  return (
    <div id="couple" className="bridegroom clear section-padding bg-pink">
      <div className="container">
        <div className="row mb-60">
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
                    सुमित त्यागी<i className="ti-heart"></i>
                  </h6>{" "}
                  <span>दूल्हा</span>
                  <p>
                    सुपुत्र स्व.श्री मती बाला त्यागी एवं स्व.श्री राम सिंह
                    त्यागी
                  </p>
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
                    प्रमीला <i className="ti-heart"></i>
                  </h6>{" "}
                  <span>दुल्हन</span>
                  <p>सुपुत्री श्री मती विमला देवी एवं श्री राजकुमार</p>
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
              4 मार्च, 2022 –चौपाल नं.2,गांव घॏण्डली कृष्णा नगर दिल्ली
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
