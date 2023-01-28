import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import React from "react";

export default function Alladmin() {
  let naviGate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/admin_log");
    }
  });

  const [admin, setAdmin] = useState([]);
  // console.log(menu);
  useEffect(() => {
    allAdmin();
  }, []);

  const allAdmin = async () => {
    axios
      .get(
        "http://localhost/React/restaurant/public/restaurantApi/alladmin.php"
      )
      .then((res) => {
        setAdmin(res.data.datas.myadmin);
      });
  };

  const delConfirm = (id) => {
    delAdmin(id);
  };

  const delAdmin = async (id) => {
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/deladmin.php",
        {
          adminid: id,
        }
      )
      .then((res) => {
        alert(res.data.msg);
        allAdmin();
      });
  };

  return (
    <div className="col-sm-10">
      <br />
      <div className="content-wrapper">
        <div className="card">
          <div className="card-header flex">
            <h3 className="card-title">All Admin List</h3>
            <ul className="nav d-flex justify-content-end">
              <li>
                <Link to="/admin/adminentry">
                  <button className="btn btn-primary">Add New Admin</button>
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
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {admin.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.image}</td>
                    <td>
                      <Link
                        to={`/admin/editadmin/${item.id}`}
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
                  <th>Image</th>
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
