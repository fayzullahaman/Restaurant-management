import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import React from "react";

export default function Editadmin() {
  let naviGate = useNavigate();
  const params = useParams();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/admin_log");
    }
  });

  const [adminInfo, setAdminInfo] = useState([]);

  const submitValue = (e) => {
    e.preventDefault();
    adminSubmit();
  };

  const adminSubmit = () => {
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/editadmin.php",
        {
          id: adminInfo.id,
          name: adminInfo.name,
          details: adminInfo.email,
          image: adminInfo.image,
        }
      )
      .then((res) => {
        naviGate("/admin/alladmin");
        //   alert(res.data.msg);
        //   console.log(res.data);
      });
  };
  // console.log(item);

  useEffect(() => {
    adminOne(params.id);
  }, []);
  //   console.log("MyID:" + params.id);

  const changeValue = (e) => {
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
  };

  const adminOne = async (id) => {
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/getadmin.php",
        {
          adminid: id,
        }
      )
      .then((res) => {
        setAdminInfo(res.data.items.admindata);
        //   console.log(res.data.items.admindata);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="col-sm-10">
      <br />
      <div className="content-wrapper">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Edit Menu</h3>
          </div>
          <div className="card-body">
            <div className="container">
              <form onSubmit={submitValue} className="insertproduct">
                <div className="form-group">
                  <label className="fw-bold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={adminInfo.name}
                    onChange={changeValue}
                    className="form-control"
                  />

                  <label className="fw-bold">Email</label>
                  <textarea
                    type="email"
                    name="email"
                    value={adminInfo.email}
                    onChange={changeValue}
                    className="form-control"
                  ></textarea>

                  <label className="fw-bold">Image</label>
                  <input
                    type="text"
                    name="image"
                    value={adminInfo.image}
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
