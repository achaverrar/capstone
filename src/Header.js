import React from "react";
import Nav from "./Nav";
import Logo from "./images/Logo.svg";

const Header = () => {
  return (
    <header>
      <h1>
        <img src={Logo} alt="Little Lemon's logo" />
      </h1>
      <Nav></Nav>
    </header>
  );
};

export default Header;
