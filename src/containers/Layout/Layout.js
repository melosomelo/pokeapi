import React, { useState } from "react";

import Footer from "../../components/UI/Footer/Footer";
import Header from "../../components/UI/Header/Header";
import Sidedrawer from "../../components/UI/Sidedrawer/Sidedrawer";

import { MenuIcon } from "./styles";

function Layout({ children }) {
  //state variables
  const [showSidedrawer, setShowSidedrawer] = useState(false);

  //event listeners
  const onMenuIconClick = () => {
    setShowSidedrawer(true);
    document.querySelector("body").classList.add("no-scroll");
  };

  const onCloseIconClick = () => {
    setShowSidedrawer(false);
    document.querySelector("body").classList.remove("no-scroll");
  };

  return (
    <>
      <Sidedrawer show={showSidedrawer} closeSidedrawer={onCloseIconClick} />
      <MenuIcon onClick={onMenuIconClick} />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
