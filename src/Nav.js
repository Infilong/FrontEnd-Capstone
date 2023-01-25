import React from "react";
import "./App.css";
import logo from "./Images/littleLemonLogo.png";

const NavLinks = [
  { text: "Home", href: "/home" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Reservations", href: "/reservations" },
  { text: "Order Online", href: "/order-online" },
  { text: "Login", href: "/login" },
];

function Nav() {
  return (
    <nav>
      <img src={logo} alt="little lemon logo"></img>
      <ul>
        {/* Use a map function to generate the list items and anchor tags */}
        {NavLinks.map((link) => (
          <li key={link.text}>
            <a href={link.href}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
