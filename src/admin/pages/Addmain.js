import React from "react";
import { Outlet } from "react-router-dom";
import Addsidbar from "../component/Addsidbar";
import Addtopbar from "../component/Addtopbar";

export default function Addmain() {
  return (
    <>
      <Addtopbar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Addsidbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
