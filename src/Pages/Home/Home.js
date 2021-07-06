import React from "react";
import "./Home.css";
import { Navbar } from "../../Components";
import { Footer } from "../../Widgets";
import { log } from "loglevel";
import { Logo } from "../../Assets";

const Home = () => {
  return (
    <div>
      <section>
        <Navbar />
        <div className="container-fluid" id="top-container">
          {/* TOP SECTION NO 1 */}
          <div id="image-container">
            <img src={Logo} alt="Midas Cravings" id="home-image" />
            <h2>MIDAS CRAVINGS</h2>
          </div>

          <div className="row">
            <div className="col">
              <h6>Sunday-Thursday</h6>
              <span>4-6PM</span>
            </div>

            <div className="col">
              <h6>Friday-Saturday</h6>
              <span>4-10PM</span>
            </div>

            <div className="col">
              <h6>09055506102</h6>
              <h6>7 Achi Street Independence layout, Enugu. 400001.</h6>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export { Home };
