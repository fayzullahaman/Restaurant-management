import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import React from "react";

export default function Edituser() {
  let naviGate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/admin_log");
    }
  });

  const params = useParams();
  const [userInfo, setUserInfo] = useState([]);

  const submitValue = (e) => {
    e.preventDefault();
    userSubmit();
  };

  const userSubmit = () => {
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/edituser.php",
        {
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          contact: userInfo.contact,
          address: userInfo.address,
        }
      )
      .then((res) => {
        naviGate("/admin/alluser");
        alert(res.data.msg);
        // console.log(res.data);
      });
  };
  // console.log(item);

  useEffect(() => {
    userOne(params.id);
  }, []);
  console.log("MyID:" + params.id);

  const changeValue = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const userOne = async (id) => {
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/getuser.php",
        {
          userid: id,
        }
      )
      .then((res) => {
        setUserInfo(res.data.items.userdata);
        //   console.log(res.data.items.userdata);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="col-sm-10">
      <br />
      <div className="content-wrapper">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Edit User</h3>
          </div>
          <div className="card-body">
            <div className="container">
              <form onSubmit={submitValue} className="insertproduct">
                <div className="form-group">
                  <label className="fw-bold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={changeValue}
                    className="form-control"
                  />

                  <label className="fw-bold">Email</label>
                  <textarea
                    type="Email"
                    name="Email"
                    value={userInfo.email}
                    onChange={changeValue}
                    className="form-control"
                  ></textarea>

                  <label className="fw-bold">Contact</label>
                  <input
                    type="text"
                    name="contact"
                    value={userInfo.contact}
                    onChange={changeValue}
                    className="form-control"
                  />

                  <label className="fw-bold">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={userInfo.address}
                    onChange={changeValue}
                    className="form-control"
                  />
                  <br />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
