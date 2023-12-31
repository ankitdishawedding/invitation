import React from "react";
import where1 from "../assets/images/where-1.jpg";
import Haldi from "../assets/Haldi.png";
import Wedding from "../assets/images/wedding.jpeg";
import Ring from "../assets/images/ring.jpg";
import Mehndi from "../assets/images/Mehandi.png";
import where2 from "../assets/images/where-2.jpg";
import where3 from "../assets/images/where-3.jpg";
function Where() {
  return (
    <div id="whenwhere" className="whenwhere section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            {" "}
            <span className="oliven-title-meta">Questions</span>
            <h2 className="oliven-title">When & Where</h2>{" "}
          </div>
        </div>
        <div className="row">
          <div className="item col-12 col-md-4 rounded-xl">
            <div className="whenwhere-img rounded-t-xl">
              {" "}
              <img
                src={Ring}
                alt="haldi"
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>
            <div className="content">
              <h5>Sagai & Ring Ceremony</h5>
              <p>
                <i className="ti-location-pin"></i>
                Ashram The Banquet, Ganga Nagar Meerut,Uttar Pradesh
              </p>
              <p>
                <i className="ti-time"></i>
                <span>12th February 2024</span> <span>12:00 PM</span>
              </p>
              <a
                href="https://www.google.com/maps/dir//aashram+the+banqut/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390c7b6a56610c6b:0x48890d949bc02439?sa=X&ved=2ahUKEwjiuO_tubmDAxUsUGwGHYfxAlsQ9Rd6BAhREAA"
                target="_blank"
                alt="wedding-location"
                style={{ color: "#9A2143", fontWeight: "700" }}
              >
                Locate Me
              </a>
            </div>
          </div>
          <div className="item col-12 col-md-4 rounded-xl">
            <div className="whenwhere-img rounded-t-xl">
              {" "}
              <img
                src={Haldi}
                alt="haldi"
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>
            <div className="content">
              <h5>Haldi Ceremony</h5>
              <p>
                <i className="ti-location-pin"></i> House No. 291 JF Pocket
                Ganga Nagar Meerut,Uttar Pradesh
              </p>
              <p>
                <i className="ti-time"></i>
                <span>13th February 2024</span> <span>11:00 AM</span>
              </p>
              <a
                href="https://www.google.com/maps/place/JF-291,+KP+Pocket,+Ganga+Nagar,+Meerut,+Uttar+Pradesh+250001/@29.0069744,77.7596037,19.5z/data=!4m19!1m13!4m12!1m4!2m2!1d77.7594771!2d29.0067639!4e1!1m6!1m2!1s0x390c7ac52a83da9b:0x6a6b4692eac8cce1!2sJF-291,+KP+Pocket,+Ganga+Nagar,+Meerut,+Uttar+Pradesh+250001!2m2!1d77.7594833!2d29.0067792!3m4!1s0x390c7ac52a83da9b:0x6a6b4692eac8cce1!8m2!3d29.0067792!4d77.7594833"
                target="_blank"
                alt="wedding-location"
                style={{ color: "#9A2143", fontWeight: "700" }}
              >
                Locate Me
              </a>
            </div>
          </div>
          <div className="item col-12 col-md-4 rounded-lg">
            <div className="whenwhere-img">
              {" "}
              <img
                src={Mehndi}
                alt=""
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>
            <div className="content">
              <h5>Mehndi</h5>
              <p>
                <i className="ti-location-pin"></i> House No. 291 JF Pocket
                Ganga Nagar Meerut,Uttar Pradesh
              </p>
              <p>
                <i className="ti-time"></i>
                <span>13th February 2024</span> <span>7:00pm</span>
              </p>
              <a
                href="https://www.google.com/maps/place/JF-291,+KP+Pocket,+Ganga+Nagar,+Meerut,+Uttar+Pradesh+250001/@29.0069744,77.7596037,19.5z/data=!4m19!1m13!4m12!1m4!2m2!1d77.7594771!2d29.0067639!4e1!1m6!1m2!1s0x390c7ac52a83da9b:0x6a6b4692eac8cce1!2sJF-291,+KP+Pocket,+Ganga+Nagar,+Meerut,+Uttar+Pradesh+250001!2m2!1d77.7594833!2d29.0067792!3m4!1s0x390c7ac52a83da9b:0x6a6b4692eac8cce1!8m2!3d29.0067792!4d77.7594833"
                target="_blank"
                alt="wedding-location"
                style={{ color: "#9A2143", fontWeight: "700" }}
              >
                Locate Me
              </a>
            </div>
          </div>
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              <img src={Wedding} alt="" />
            </div>
            <div className="content">
              <h5>Weddding</h5>
              <p>
                <i className="ti-location-pin"></i> Imperial Gardens, Ghaziabad
              </p>
              <p>
                <i className="ti-time"></i> <span>14th Feb 2024</span>
                {"     "}
                <span>Time-8:00pm</span>
              </p>
              <a
                href="https://www.google.com/maps/dir//Hapur+Rd,+Gangapuram,+Avantika+Colony,+Shastri+Nagar,+Ghaziabad,+Uttar+Pradesh+201015/@28.6749653,77.435426,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cf239184c69bb:0x1667ab0e5fbce4ad!2m2!1d77.4925571!2d28.6798085?entry=ttu"
                target="_blank"
                alt="wedding-location"
                style={{ color: "#9A2143", fontWeight: "700" }}
              >
                Locate Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Where;
