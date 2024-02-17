import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css'
import standard from '../assests/img/Standard Collection 27.png';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.hash === `#${path}`;
  };
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white container-lg py-4" >
        <div className="container-fluid d-flex justify-content-between align-items-center" >
          <NavLink exact to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img src={standard} alt='logo' className='h-10' />
            <p className='fs-5 fw-semibold mb-0 ml-2'> Lasles<span className='fw-bold'>VPN</span></p>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav custom-center ms-auto">
              <li className="nav-item">
                <a href="#about" className={`nav-link ${isActive('about') ? 'active-link' : ''}`}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#features" className={`nav-link ${isActive('features') ? 'active-link' : ''}`}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#pricing" className={`nav-link ${isActive('pricing') ? 'active-link' : ''}`}>
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#testimonials" className={`nav-link ${isActive('testimonials') ? 'active-link' : ''}`}>
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a href="#help" className={`nav-link ${isActive('help') ? 'active-link' : ''}`}>
                  Help
                </a>
              </li>
            </ul>
            <div className="ms-auto">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="#" className="nav-link">
                    <p className='mb-0 fw-medium fs-5 fw-bold mt-1'>Sign in</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="#" className="nav-link">
                    <button type="button" className="btn btn-light border border-success rounded-pill border-1 d-flex align-items-center justify-content-center text-danger fw-bold bg-white" style={{ width: "150px", height: "45px" }}>
                      Sign Up
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;


