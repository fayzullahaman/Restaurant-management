import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import React from "react";

export default function Alluser() {
  let naviGate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/admin_log");
    }
  });

  const [userInfo, setUserInfo] = useState([]);
  // console.log(menu);
  useEffect(() => {
    allUser();
  }, []);

  const allUser = async () => {
    axios
      .get("http://localhost/React/restaurant/public/restaurantApi/alluser.php")
      .then((res) => {
        setUserInfo(res.data.datas.users);
        // console.log(res.data.datas.menus);
      });
  };

  const delConfirm = (id) => {
    delUser(id);
  };

  const delUser = async (id) => {
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/deluser.php",
        {
          userid: id,
        }
      )
      .then((res) => {
        alert(res.data.msg);
        allUser();
      });
  };

  return (
    <div className="col-sm-10">
      <br />
      <div className="content-wrapper">
        <div className="card">
          <div className="card-header flex">
            <h3 className="card-title">All User List</h3>
            <ul className="nav d-flex justify-content-end">
              <li>
                <Link to="/admin/adduser">
                  <button className="btn btn-primary">Add New User</button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userInfo.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td>
                      <Link
                        to={`/admin/edituser/${item.id}`}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => delConfirm(item.id)}
                        className="btn btn-danger mx-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
