import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Team() {
  const [team, setTeam] = useState([]);
  // console.log(team);
  useEffect(() => {
    allteam();
  }, []);
  const allteam = async () => {
    axios
      .get("http://localhost/React/restaurant/public/restaurantApi/chefs.php")
      .then((res) => {
        setTeam(res.data.item.chefs);
        // console.log(res.data.item.chefs);
      });
  };

  return (
    <div>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Our Team
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
                  Team
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container-xxl pt-5 pb-3">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                Team Members
              </h5>
              <h1 className="mb-5">Our Master Chefs</h1>
            </div>
            <div className="row g-4">
              {team.map((item, index) => (
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img className="img-fluid" src={item.image} alt="" />
                    </div>
                    <h5 className="mb-0">{item.name}</h5>
                    <span>{item.designation}</span>
                    <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
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
