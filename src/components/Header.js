import React from 'react';
import { Link } from 'react-router-dom';
import standard from '../assests/img/Standard Collection 27.png';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white container-lg py-4 ">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="#">
            <img src={standard} alt='logo' className='h-10' />
            <p className='fs-5 fw-semibold mb-0 ml-2'> Lasles<span className='fw-bold'>VPN</span></p>
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Help
                </Link>
              </li>
              {/* Move Sign In and Sign Up to the right */}
            </ul>
            <div className="ms-auto ">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <p className='mb-0 fw-medium fs-5 fw-bold mt-1'>Sign in</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <button type="button" className="btn btn-light border border-success rounded-pill border-1 d-flex align-items-center justify-content-center text-danger fw-bold bg-white" style={{ width: "150px", height: "45px" }}>
                      Sign Up
                    </button>
                  </Link>
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





