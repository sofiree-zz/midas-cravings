// import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../Assets";
import "./Navbar.css";
const Navbar = () => {
  // const [state, setState] = useState({});
  return (
    <header id="layout-header" className="header-primary">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src={Logo} alt="Midas Cravings" width="auto" height="40"  />
          </a>
          {/* //toogler// */}
          <button
            className="navbar-toggler collaspe"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="toggler-button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* //toogler end// */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-list">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Catering
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-list">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Order Online
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
