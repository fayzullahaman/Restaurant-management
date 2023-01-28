import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import React from "react";

export default function Orders() {
  let naviGate = useNavigate();
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    if (email == null) {
      naviGate("/admin_log");
    }
  });

  const [orders, setOrders] = useState([]);
  //   console.log(orders);
  useEffect(() => {
    allOrder();
  }, []);

  const allOrder = async () => {
    axios
      .get(
        "http://localhost/React/restaurant/public/restaurantApi/allorder.php"
      )
      .then((res) => {
        setOrders(res.data.datas.myorder);
        //   console.log(res.data.datas.myorder);
      });
  };

  const delConfirm = (id) => {
    delOrder(id);
  };

  const delOrder = async (id) => {
    axios
      .post(
        "http://localhost/React/restaurant/public/restaurantApi/delorder.php",
        {
          orderid: id,
        }
      )
      .then((res) => {
        alert(res.data.msg);
        allOrder();
      });
  };

  return (
    <div className="col-sm-10">
      <br />
      <div className="content-wrapper">
        <div className="card">
          <div className="card-header flex">
            <h3 className="card-title">All Order List</h3>
          </div>

          <div className="card-body">
            <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.contact}</td>
                    <td>{item.message}</td>
                    <td>
                      <button
                        onClick={() => delConfirm(item.id)}
                        className="btn btn-primary"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => delConfirm(item.id)}
                        className="btn btn-info"
                      >
                        Confirm
                      </button>
                      <Link to="/admin/invoice/" className="btn btn-info mx-2">
                        Invoice
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Message</th>
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
