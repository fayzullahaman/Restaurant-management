import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function User_reg() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    password: "",
  });

  const changeValue = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  // console.log(userInfo);
  const formSubmit = async (e) => {
    e.preventDefault();
    // e.persist();
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/addusers.php",
        {
          name: userInfo.name,
          email: userInfo.email,
          contact: userInfo.contact,
          address: userInfo.address,
          password: userInfo.password,
        }
      )
      .then((res) => {
        alert(res.data.msg);
        // console.log(res.data.msg);
        navigate("/user_log");
      });
  };

  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container text-center my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            User Registration
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
                Register
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
                Registration Form
              </h5>
              <h1 className="text-white mb-4">User Registration</h1>
              <form onSubmit={formSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={changeValue}
                        placeholder="Your Name"
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={changeValue}
                        placeholder="Your Email"
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="contact"
                        onChange={changeValue}
                        className="form-control"
                        placeholder="Your Contact"
                      />
                      <label for="name">Your Contact</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={changeValue}
                        placeholder="Your Password"
                      />
                      <label for="email">Your Password</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <textarea
                        type="text"
                        className="form-control"
                        name="address"
                        onChange={changeValue}
                        placeholder="Your Address"
                      ></textarea>
                      <label for="email">Your Address</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
