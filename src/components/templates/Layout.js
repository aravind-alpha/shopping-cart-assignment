import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../organisms/Header/Header.js";
import Footer from "../organisms/Footer/Footer.js";
import Routes from "./Routes.js";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
