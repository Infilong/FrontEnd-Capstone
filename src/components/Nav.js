import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/littleLemonLogo.png";

const NavLinks = [
  { text: "Home", page: "/" },
  { text: "About", page: "/about" },
  { text: "Contact", page: "/contact" },
  { text: "Order Online", page: "/booking" },
  { text: "Login", page: "/login" },
];

function Nav() {
  return (
    <nav>
      <img src={logo} alt="little lemon logo"></img>
      {/* <ul>
        {NavLinks.map((link) => (
          <li key={link.text}>
            <a href={link.page}>{link.text}</a>
          </li>
        ))}
      </ul> */}

      {/* Using Link component will cause some problem such as webpage doesn't show. The reason is that <Nav> should be inside <BrowserRouter>, or the Router isn't aware of what routes the links are attempting to link to that it is managing. */}
      {/* https://stackoverflow.com/questions/70220413/error-usehref-may-be-used-only-in-the-context-of-a-router-component-it-wor */}

      <ul>
        {NavLinks.map((link) => (
          <li key={link.text}>
            <Link to={link.page}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
