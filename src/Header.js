import React from "react";
import logo from './littleLemonLogo.png';

function Header(props) {
  return (
    <>
      <header>
        <img src={logo} alt="little lemon logo"></img>
      </header>
    </>
  );
}

export default Header;
