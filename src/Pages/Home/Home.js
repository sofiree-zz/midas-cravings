import React from "react";
import "./Home.css";
import { Navbar } from "../../Components";
import { Footer } from "../../Widgets";
import { Logo, MeatChips, SpiltOats } from "../../Assets";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="Topcontainer">
        {" "}
        {/* TOP SECTION NO 1 */}
        <div className="container-fluid" id="home-containerfluid">
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
          <hr id="divider" />
        </div>
      </section>{" "}
      {/* TOP SECTION NO 1 ENDS*/}
      <section>
        {/* SECTION NO 2 STARTS */}

        <div className="container-fluid" id="about-containerfluid">
          <div className="container" id="about-container">
            <div className="row text-center" id="about-row">
              <div className="col-lg-6">
                <div className="Abouttext">
                  <h1>About Midas Cravings</h1>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean dictum purus tortor,
                  </h4>
                  <p>
                    Donec faucibus non dolor viverra pellentesque. Donec nec
                    quam pharetra, iaculis urna eu, tristique leo. Integer
                    ornare commodo vehicula. Etiam nec luctus sapien, et
                    tincidunt metus. Fusce dapibus efficitur sapien, a efficitur
                    est mattis et. Morbi odio diam, convallis vitae dui id,
                    efficitur hendrerit risus. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas.
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="Aboutimage">
                  <img src={SpiltOats} alt="" id="about-image" />
                </div>
              </div>
              <hr id="divider2" />
            </div>
          </div>
        </div>
      </section>
      {/* SECTION NO 2 ENDS */}
      {/* SECTION NO 3 STARTS */}
      <section>
        <div className="container-fluid" id="cusine-containerfluid">
          <div className="container" id="cusine-container">
            <div className="row text-center" id="cusine-row">
            <div className="col-lg-5">
                <div className="cusineimage">
                  <img src={MeatChips} alt="" id="cusine-image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cusinetext">
                  <h1>Our Caterings</h1>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean dictum purus tortor,
                  </h4>
                  <p>
                    Donec faucibus non dolor viverra pellentesque. Donec nec
                    quam pharetra, iaculis urna eu, tristique leo. Integer
                    ornare commodo vehicula. Etiam nec luctus sapien, et
                    tincidunt metus. Fusce dapibus efficitur sapien, a efficitur
                    est mattis et. Morbi odio diam, convallis vitae dui id,
                    efficitur hendrerit risus. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas.
                  </p>
                </div>
              </div>

              
              <hr id="divider2" />
            </div>
          </div>
        </div>
      </section>
      {/* SECTION NO 2 ENDS */}
      <Footer />
    </div>
  );
};
export { Home };
