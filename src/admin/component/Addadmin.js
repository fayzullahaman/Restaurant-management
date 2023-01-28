import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import React from "react";

export default function Addadmin() {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      navigate("/admin_log");
    }
  });

  const [adminInfo, setAdminInfo] = useState({
    name: "",
    email: "",
    passwor: "",
    image: "",
  });

  const changeValue = (e) => {
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
  };

  const SubmitValue = async (e) => {
    // alert("Submitted");
    e.preventDefault();
    e.persist();
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/addadmin.php",
        {
          name: adminInfo.name,
          email: adminInfo.email,
          password: adminInfo.password,
          image: adminInfo.image,
        }
      )
      .then((result) => {
        alert(result.data.msg);
        navigate("/admin/alladmin");
      });
  };
  return (
    <>
      <div className="col-sm-10">
        <br />
        <div className="content-wrapper">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Add New Admin</h3>
            </div>

            <div className="card-body">
              <div className="container">
                <form className="insertproduct" onSubmit={SubmitValue}>
                  <div className="form-group">
                    <label className="fw-bold">Admin Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={changeValue}
                      placeholder="Enter Name"
                      className="form-control"
                    />

                    <label className="fw-bold">Admin Email</label>
                    <textarea
                      type="email"
                      name="email"
                      onChange={changeValue}
                      className="form-control"
                      placeholder="Enter Email"
                    ></textarea>

                    <label className="fw-bold">Admin Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={changeValue}
                      placeholder="Enter Password"
                      className="form-control"
                    />

                    <label className="fw-bold">Menu Image</label>
                    <input
                      type="text"
                      name="image"
                      onChange={changeValue}
                      className="form-control"
                    />
                    <br />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
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
