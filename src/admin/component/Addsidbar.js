import React from "react";
import { Link } from "react-router-dom";

export default function Addsidbar() {
  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <Link to="/admin" className="nav-link align-middle px-0">
                <i className="fs-4 bi-speedometer2"></i>
                <span className="ms-1 d-none d-sm-inline">Dashboard</span>
              </Link>
            </li>
            <li>
              <a
                href="#submenu1"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
              >
                <i className="fs-4 bi-menu-up"></i>
                <span className="ms-1 d-none d-sm-inline">Menu</span>
              </a>
              <ul
                className="collapse show nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <li className="w-100">
                  <Link to="allmenu" className="nav-link px-0">
                    <span className="d-none d-sm-inline">Menu List</span>
                  </Link>
                </li>
                <li className="w-100">
                  <Link to="addmenu" className="nav-link px-0">
                    <span className="d-none d-sm-inline">Add Eew Menu</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#submenu2"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle "
              >
                <i className="fs-4 bi-people"></i>
                <span className="ms-2 d-none d-sm-inline">Chefs</span>
              </a>
              <ul
                className="collapse nav flex-column ms-1"
                id="submenu2"
                data-bs-parent="#menu"
              >
                <li className="w-100">
                  <Link to="chefs" className="nav-link px-0">
                    <span className="d-none d-sm-inline">All Chefs</span>
                  </Link>
                </li>
                <li>
                  <Link to="addchefs" className="nav-link px-0">
                    <span className="d-none d-sm-inline">Add New Chefs</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#submenu3"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
              >
                <i className="fs-4 bi-grid"></i>
                <span className="ms-1 d-none d-sm-inline">Users</span>
              </a>
              <ul
                className="collapse nav flex-column ms-1"
                id="submenu3"
                data-bs-parent="#menu"
              >
                <li className="w-100">
                  <Link to="alluser" className="nav-link px-0">
                    <span className="d-none d-sm-inline">All Users</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="nav-link px-0">
                    <span className="d-none d-sm-inline">Add User</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="orders" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-people"></i>
                <span className="ms-1 d-none d-sm-inline">Order</span>
              </Link>
            </li>
            <li>
              <Link to="alladmin" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-people"></i>
                <span className="ms-1 d-none d-sm-inline">Admin</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
