import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import React from "react";

export default function Allmenu() {
  let naviGate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/admin_log");
    }
  });

  const [menu, setMenu] = useState([]);
  // console.log(menu);
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

  const delConfirm = (id) => {
    delMenu(id);
  };

  const delMenu = async (id) => {
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/delmenu.php",
        {
          menuid: id,
        }
      )
      .then((res) => {
        alert(res.data.msg);
        allMenu();
      });
  };

  return (
    <div className="col-sm-10">
      <br />
      <div className="content-wrapper">
        <div className="card">
          <div className="card-header d-flex">
            <h3 className="card-title ">All Menu List</h3>
            <ul className="nav d-flex justify-content-end">
              <li>
                <Link to="/admin/addmenu">
                  <button className="btn btn-primary">Add New Menu</button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4 justify-content-end">
            <button className="btn btn-primary">
              <input type="text" name="search" placeholder="Search Your Item" />{" "}
              Search
            </button>
          </div>
          <div className="card-body ">
            <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Details</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`/assets/img/uploads/${item.image}`}
                        alt="Phood-image"
                        style={{ width: "70px" }}
                      />
                      {/* {item.image} */}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.details}</td>
                    <td>{item.price}</td>
                    <td className="d-flex">
                      <Link
                        to={`/admin/editmenu/${item.id}`}
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
                  <th>Image</th>
                  <th>Name</th>
                  <th>Details</th>
                  <th>Price</th>
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
