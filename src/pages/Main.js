import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
