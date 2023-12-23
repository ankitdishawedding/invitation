import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import data from "../ssr.json";

function Sidebar() {
  const [show, setShow] = useState(false);
  const { date, heading, footerDate } = data["sidebar"];
  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle("slide");
  };

  return (
    <>
      <a
        href="/"
        onClick={openMenu}
        className={`js-oliven-nav-toggle oliven-nav-toggle${
          show ? " active" : ""
        }`}
      >
        <i></i>
      </a>
      <aside id="oliven-aside">
        <div className="oliven-logo">
          <a href="#home">
            <img src={Logo} alt="" />
            <span>{heading}</span>
            <h6>{date}</h6>
          </a>
        </div>
        <nav className="oliven-main-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#couple">Couple</a>
            </li>

            <li>
              <a href="#organization">Organization</a>
            </li>

            <li>
              <a href="#whenwhere">When & Where</a>
            </li>
          </ul>
        </nav>
        <div className="footer1">
          {" "}
          <span className="separator"></span>
          <p>
            {`${heading} wedding`}
            <br />
            {footerDate}
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
