import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Service() {
  const [service, setService] = useState([]);
  // console.log(service);
  useEffect(() => {
    allservice();
  }, []);
  const allservice = async () => {
    axios
      .get(
        "http://localhost/React/restaurant/public/restaurantApi/services.php"
      )
      .then((res) => {
        setService(res.data.item.services);
        // console.log(res.data.item.services);
      });
  };

  return (
    <div>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Service
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
                  Service
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                Our Services
              </h5>
              <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div className="row g-4">
              {service.map((item, index) => (
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <img
                        className="text-primary mb-4"
                        src={item.icon}
                        style={{ width: "80px" }}
                      />
                      <h5>{item.name}</h5>
                      <p>{item.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
