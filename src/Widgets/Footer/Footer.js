import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="page-footer">
        <div className="container-fluid text-center text-md-left" id="footer-container">
            <div className="row">
            <section className="col">
            <h6>Sunday-Thursday</h6>
            <span>4-9pm</span>

            <h6>Friday-Sunday</h6>
            <span>4-10pm</span>
          </section>
          <hr className="col"/>
          <section className="col" >
            <h6>FOLLOW</h6>
            <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
            <h6>GET THE LATEST NEWS. SIGN UP FOR OUR NEWSLETTER.</h6>
            <h6 className="footer-copyright">© Midas Cravings 2021</h6>
          </section>
            </div>
          
        </div>
      </footer>
    </>
  );
};

export { Footer };
