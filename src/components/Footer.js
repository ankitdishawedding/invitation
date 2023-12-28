import React from "react";
import Logo from "../assets/images/logo.png";
import data from "../ssr.json";
function Footer() {
  const { heading, footerDate, linkToNavigate, ctaText } = data["footer"];
  return (
    <div className="footer2">
      <div className="oliven-narrow-content">
        <div className="row">
          <div className="col-md-12  flex  flex-col justify-center items-center text-center">
            <img src={Logo} alt="" />
            <h2>
              <a href="/">
                <span>{heading}</span>
              </a>
            </h2>
            <p className="copyright">{footerDate}</p>
            <a
              href={linkToNavigate}
              alt="linkedin"
              target="_blank"
              className="copyright"
              style={{ marginTop: "5px" }}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
