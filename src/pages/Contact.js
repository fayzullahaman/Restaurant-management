import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  let naviGate = useNavigate();
  const [contactinfo, setContactinfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const ChangeValue = (e) => {
    setContactinfo({ ...contactinfo, [e.target.name]: e.target.value });
  };

  const SubmitValue = async (e) => {
    //  alert("Submitted");
    e.preventDefault();
    e.persist();
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/contact.php",
        {
          name: contactinfo.name,
          email: contactinfo.email,
          subject: contactinfo.subject,
          message: contactinfo.message,
        }
      )
      .then((result) => {
        alert(result.data.msg);
        // console.log(result.data.msg);
        naviGate("/menu");
      });
  };
  return (
    <div>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Contact
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
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                Contact Us
              </h5>
              <h1 className="mb-5">Contact For Any Query</h1>
            </div>
            <div className="row g-4">
              <div className="col-12">
                <div className="row gy-4">
                  <div className="col-md-4">
                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                      Booking
                    </h5>
                    <p>
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      book@example.com
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                      General
                    </h5>
                    <p>
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      info@example.com
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">
                      Technical
                    </h5>
                    <p>
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      tech@example.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                <iframe
                  className="position-relative rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              <div className="col-md-6">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <form onSubmit={SubmitValue}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={ChangeValue}
                            placeholder="Your Name"
                          />
                          <label for="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            onChange={ChangeValue}
                            placeholder="Your Email"
                          />
                          <label for="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            onChange={ChangeValue}
                            placeholder="Subject"
                          />
                          <label for="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            name="message"
                            placeholder="Leave a message here"
                            onChange={ChangeValue}
                          ></textarea>
                          <label for="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Send Message
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
    </div>
  );
}
