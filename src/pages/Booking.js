import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const naviGate = useNavigate();
  const [orderInfo, setOrderInfo] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    message: "",
  });

  const changeValue = (e) => {
    setOrderInfo({ ...orderInfo, [e.target.name]: e.target.value });
  };

  const SubmitValue = async (e) => {
    //  alert("Submitted");
    e.preventDefault();
    e.persist();
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/order.php",
        {
          name: orderInfo.name,
          email: orderInfo.email,
          address: orderInfo.address,
          contact: orderInfo.contact,
          message: orderInfo.message,
        }
      )
      .then((result) => {
        alert(result.data.msg);
        naviGate("/menu");
      });
  };
  return (
    <div>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Booking
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
                  Booking
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div
          className="container-xxl py-5 px-0 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="row g-0">
            <div className="col-md-6">
              <div className="video">
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>
            </div>
            <div className="col-md-6 bg-dark d-flex align-items-center">
              <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                  Reservation
                </h5>
                <h1 className="text-white mb-4">Book A Table Online</h1>
                <form onSubmit={SubmitValue}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          onChange={changeValue}
                          placeholder="Your Name"
                        />
                        <label for="email">Your Name</label>
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
                          className="form-control"
                          name="address"
                          onChange={changeValue}
                          placeholder="Your Address"
                        />
                        <label for="email">Your Address</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          name="contact"
                          onChange={changeValue}
                          placeholder="Your Contact"
                        />
                        <label for="email">Your Contact</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <textarea
                          type="text"
                          className="form-control"
                          name="message"
                          onChange={changeValue}
                          placeholder="Your Message"
                        ></textarea>
                        <label for="email">Your Special Request</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
