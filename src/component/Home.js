import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [service, setService] = useState([]);
  // console.log(team);
  useEffect(() => {
    allservice();
  }, []);

  const [menu, setMenu] = useState([]);
  useEffect(() => {
    allMenu();
  }, []);

  const allMenu = async () => {
    axios
      .get("http://localhost/React/restaurant/public/restaurantApi/allmenu.php")
      .then((res) => {
        setMenu(res.data.datas.menus);
        // console.log(res.data.datas.menus);
      });
  };

  // filtering
  const [menuName, setMenuName] = useState("");
  let filteredMenu = menu;
  // console.log(filteredMenu);
  if (menuName != "") {
    filteredMenu = menu.filter((e) => e.category == menuName);
  }
  // filtering

  // Searching
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchedMenu = filteredMenu.filter(
    (mu) =>
      mu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mu.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mu.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Searching

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

  // Boking part
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
  // Boking part
  return (
    <div>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
              <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="display-3 text-white animated slideInLeft">
                    Enjoy Our
                    <br />
                    Delicious Meal
                  </h1>
                  <p className="text-white animated slideInLeft mb-4 pb-2">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <Link
                    to="/booking"
                    className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                  >
                    Book A Table
                  </Link>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                  <img className="img-fluid" src="assets/img/hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              {service.map((item, index) => (
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <img
                        className="fa fa-3x fa-user-tie text-primary mb-4"
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

        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.1s"
                      src="assets/img/about-1.jpg"
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.3s"
                      src="assets/img/about-2.jpg"
                      style={{ marginTop: "25%" }}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.5s"
                      src="assets/img/about-3.jpg"
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.7s"
                      src="assets/img/about-4.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                  About Us
                </h5>
                <h1 className="mb-4">
                  Welcome to
                  <i className="fa fa-utensils text-primary me-2"></i>
                  Your Restaurant
                </h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed
                  stet lorem sit.
                </p>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                      <h1
                        className="flex-shrink-0 display-5 text-primary mb-0"
                        data-toggle="counter-up"
                      >
                        15
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0">Years of</p>
                        <h6 className="text-uppercase mb-0">Experience</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                      <h1
                        className="flex-shrink-0 display-5 text-primary mb-0"
                        data-toggle="counter-up"
                      >
                        50
                      </h1>
                      <div className="ps-4">
                        <p className="mb-0">Popular</p>
                        <h6 className="text-uppercase mb-0">Master Chefs</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primar fw-normal">
                Food Menu
              </h5>
              <h1 className="mb-5">Most Popular Items</h1>
            </div>

            <div
              className="tab-className text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <Link
                    onClick={() => setMenuName("")}
                    className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                    data-bs-toggle="pill"
                    to=""
                  >
                    <i className="fa fa-coffee fa-2x text-primar"></i>
                    <div className="ps-3">
                      <small className="text-body">Your Favorite</small>
                      <h6 className="mt-n1 mb-0">All Menu</h6>
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    onClick={() => setMenuName("breakfast")}
                    className="d-flex align-items-center text-start mx-3 ms-0 pb-3"
                    data-bs-toggle="pill"
                    to=""
                  >
                    <i className="fa fa-coffee fa-2x text-primar"></i>
                    <div
                      className="ps-3"
                      // onChange={handleSearch}
                      // onClick={() => filterResult("breakfast")}
                    >
                      <small className="text-body">Popular</small>
                      <h6 className="mt-n1 mb-0">Breakfast</h6>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={() => setMenuName("lunch")}
                    className="d-flex align-items-center text-start mx-3 pb-3"
                    data-bs-toggle="pill"
                    to=""
                  >
                    <i className="fa fa-hamburger fa-2x text-primar"></i>
                    <div className="ps-3">
                      <small className="text-body">Special</small>
                      <h6 className="mt-n1 mb-0">Lunch</h6>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={() => setMenuName("dinner")}
                    className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                    data-bs-toggle="pill"
                    to=""
                  >
                    <i className="fa fa-utensils fa-2x text-primar"></i>
                    <div className="ps-3">
                      <small className="text-body">Lovely</small>
                      <h6 className="mt-n1 mb-0">Dinner</h6>
                    </div>
                  </Link>
                </li>
                <div className="ps-3">
                  <input
                    className="btn btn-search-primary"
                    type="search"
                    name="search"
                    placeholder="Search"
                    onChange={handleSearch}
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    class="btn btn-primary"
                  >
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </ul>
              <div className="row g-4">
                {searchedMenu?.map((item, index) => (
                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="team-item text-center rounded overflow-hidden">
                      <div className=" overflow-hidden m-3">
                        {/* <img className="img-fluid" src={item.image} alt="" /> */}
                        <img
                          // className="flex-shrink-0 img-fluid rounded"
                          // src="assets/img/menu-9.jpg"
                          src={item.image}
                          alt=""
                          style={{ width: "250px" }}
                        />
                      </div>
                      <h4 className="mb-3">{item.name}</h4>
                      <h6>TK {item.price}</h6>
                      <div className="justify-content-center mt-4">
                        <Link className="btn btn-primary" to="/order">
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    {menu.map((item, index) => (
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            src="assets/img/menu-1.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{item.name}</span>
                              <span className="text-primar">
                                Tk {item.price}
                              </span>
                            </h5>
                            <small className="fst-italic">{item.details}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
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

        <div
          className="modal fade"
          id="videoModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Youtube Video
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    allowfullscreen
                    allowscriptaccess="always"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>
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
            <div className="row g-3">
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
