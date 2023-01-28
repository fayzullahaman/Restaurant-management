import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  let naviGate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/admin_log");
    }
  });

  const [adminInfo, setAdminInfo] = useState([]);
  const [menuInfo, setMenuInfo] = useState([]);
  const [teamInfo, setTeamInfo] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  // console.log(adminInfo);

  useEffect(() => {
    allAdmin();
    allMenu();
    allTeam();
    allOrder();
    allUser();
  }, []);

  const allAdmin = async () => {
    axios
      .get(
        "http://localhost/React/restaurant/public/restaurantApi/alladmin.php"
      )
      .then((res) => {
        setAdminInfo(res.data.datas.myadmin);
        // console.log(res.data.datas.menus);
      });
  };

  const allMenu = async () => {
    axios
      .get("http://localhost/React/restaurant/public/restaurantApi/allmenu.php")
      .then((res) => {
        setMenuInfo(res.data.datas.menus);
        // console.log(res.data.datas.menus);
      });
  };

  const allTeam = async () => {
    axios
      .get("http://localhost/React/restaurant/public/restaurantApi/chefs.php")
      .then((res) => {
        setTeamInfo(res.data.item.chefs);
        // console.log(res.data.datas.menus);
      });
  };

  const allOrder = async () => {
    axios
      .get(
        "http://localhost/React/restaurant/public/restaurantApi/allorder.php"
      )
      .then((res) => {
        setOrderInfo(res.data.datas.myorder);
        // console.log(res.data.datas.menus);
      });
  };

  const allUser = async () => {
    axios
      .get("http://localhost/React/restaurant/public/restaurantApi/alluser.php")
      .then((res) => {
        setUserInfo(res.data.datas.users);
        // console.log(res.data.datas.menus);
      });
  };

  return (
    <>
      <div className="col-sm-12">
        <div className="row mt-3">
          <div className="col-lg-2 col-6 ">
            <div className="small-box bg-info">
              <div className="inner mx-3 ">
                <h3>
                  {adminInfo.length}
                  <p style={{ fontSize: "20px" }}>Total Admins</p>
                </h3>
              </div>
              <div className="icon">
                <i className="ion ion-bag"></i>
              </div>
              <Link to="/admin/alladmin/" className="small-box-footer mx-3">
                More info <i className="fas fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-2 col-6">
            <div className="small-box bg-success">
              <div className="inner mx-3">
                <h3>
                  {menuInfo.length}
                  <p style={{ fontSize: "20px" }}>Total Menus</p>
                </h3>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars"></i>
              </div>
              <Link to="/admin/allmenu/" className="small-box-footer mx-3">
                More info <i className="fas fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-2 col-6">
            <div className="small-box bg-warning">
              <div className="inner mx-3">
                <h3>
                  {teamInfo.length}
                  <p style={{ fontSize: "20px" }}>Total Chefs</p>
                </h3>
              </div>
              <div className="icon">
                <i className="ion ion-person-add"></i>
              </div>
              <Link to="/admin/chefs/" className="small-box-footer mx-3">
                More info <i className="fas fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-2 col-6">
            <div className="small-box bg-danger">
              <div className="inner mx-3">
                <h3>
                  {orderInfo.length}
                  <p style={{ fontSize: "20px" }}>Total Orders</p>
                </h3>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
              <Link to="/admin/orders/" className="small-box-footer mx-3">
                More info <i className="fas fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-2 col-6">
            <div className="small-box bg-secondary">
              <div className="inner mx-3">
                <h3>
                  {userInfo.length}
                  <p style={{ fontSize: "20px" }}>Total Users</p>
                </h3>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
              <Link to="/admin/alluser/" className="small-box-footer mx-3">
                More info <i className="fas fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 py-3">
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
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo magna
                        dolore erat amet
                      </p>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                      <img
                        className="img-fluid"
                        src="assets/img/hero.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
