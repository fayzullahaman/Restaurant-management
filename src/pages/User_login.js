import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function User_login() {
  const naviGate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // console.log(admin);

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/userlogin.php",
        user
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.success) {
          // alert(res.data.success);
          sessionStorage.setItem("email", res.data.user.email);
          sessionStorage.setItem("name", res.data.user.name);
          naviGate("/menu");
        } else {
          alert(res.data.error);
        }
      });
  };

  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              User Login
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  <a href="#">Login</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div
          className="container-xxl py-5 px-0 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="row g-0 justify-content-center">
            <div className="col-md-6 bg-dark d-flex align-items-center">
              <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                  User Login Form
                </h5>
                <h1 className="text-white mb-4">User Login</h1>
                <form onSubmit={formSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={handleChange}
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          onChange={handleChange}
                          placeholder="Your Password"
                        />
                        <label for="email">Your Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
