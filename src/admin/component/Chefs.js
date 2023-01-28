import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import React from "react";

export default function Chefs() {
  let naviGate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/admin_log");
    }
  });

  const [chefs, setChefs] = useState([]);
  // console.log(chefs);
  useEffect(() => {
    allChefs();
  }, []);
  console.log(chefs);
  const allChefs = async () => {
    axios
      .get("http://localhost/React/restaurant/public/restaurantApi/chefs.php")
      .then((res) => {
        setChefs(res.data.item.chefs);
      });
  };

  const delConfirm = (id) => {
    delChefs(id);
  };

  const delChefs = async (id) => {
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/delchefs.php",
        {
          chefsid: id,
        }
      )
      .then((res) => {
        alert(res.data.msg);
        allChefs();
      });
  };
  return (
    <div className="col-sm-10">
      <br />
      <div className="content-wrapper">
        <div className="card">
          <div className="card-header flex">
            <h3 className="card-title">All Chefs List</h3>
            <ul className="nav d-flex justify-content-end">
              <li>
                <Link to="/admin/addchefs">
                  <button className="btn btn-primary">Add New Chefs</button>
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
                  <th>Designation</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {chefs.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.designation}</td>
                    <td>{item.image}</td>
                    <td>
                      <Link
                        to={`/admin/editchefs/${item.id}`}
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
                  <th>Designation</th>
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
