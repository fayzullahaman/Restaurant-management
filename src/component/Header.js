import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3"></i>Restaurant
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              Service
            </Link>
            <Link to="/menu" className="nav-item nav-link">
              Menu
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/booking" className="dropdown-item">
                  Booking
                </Link>
                <Link to="/team" className="dropdown-item">
                  Our Team
                </Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle btn btn-primary py-1 px-3"
              data-bs-toggle="dropdown"
            >
              Login
            </Link>
            <div className="dropdown-menu m-0">
              <Link to="/admin_log" className="dropdown-item">
                Admin Login
              </Link>
              <Link to="/user_log" className="dropdown-item">
                User Login
              </Link>
              <Link to="/user_reg" className="dropdown-item">
                User Registration
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
