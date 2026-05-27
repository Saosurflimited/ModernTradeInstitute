import React from "react";
import Header from "../components/header_footer/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/header_footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
