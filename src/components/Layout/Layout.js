import React, { Fragment } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
