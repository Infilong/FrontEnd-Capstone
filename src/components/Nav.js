import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import logo from "../images/littleLemonLogo.png";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import About from "./About";
import Contact from "./Contact";
import Reservations from "./Reservations";
import Login from "./Login";

const NavLinks = [
  { text: "Home", page: "/" },
  { text: "About", page: "/about" },
  { text: "Contact", page: "/contact" },
  { text: "Reservations", page: "/reservations" },
  { text: "Order Online", page: "/booking" },
  { text: "Login", page: "/login" },
];

function Nav() {
  return (
    <nav>
      <img src={logo} alt="little lemon logo"></img>
      <ul>
        {NavLinks.map((link) => (
          <li key={link.text}>
            <a href={link.page}>{link.text}</a>
          </li>
        ))}
      </ul>

      {/* Using Link component will cause some problem such as webpage doesn't show */}
      {/* <ul>
        {NavLinks.map((link) => (
          <li key={link.text}>
            <Link to={link.page}>{link.text}</Link>
          </li>
        ))}
      </ul> */}
    </nav>
  );
}

export default Nav;
