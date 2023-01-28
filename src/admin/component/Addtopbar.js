import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Addtopbar() {
  let Name = sessionStorage.getItem("name");
  let naviGate = useNavigate();
  const LogOut = () => {
    sessionStorage.clear();
    naviGate("admin_log");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark align-items-center">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            REASTAURANT
          </a>
          <div className="dropdown">
            <a
              href="#"
              className=" text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="hugenerd"
                width="30"
                height="30"
                className="fas fa-user-cog rounded-circle"
              />
              <span className="d-none d-sm-inline mx-2">{Name}</span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link to="#" className="dropdown-item" onClick={LogOut}>
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
