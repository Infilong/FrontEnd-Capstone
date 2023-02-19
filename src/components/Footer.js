import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/littleLemonLogo.png";

const DoormatNavigation = [
  { text: "Home", page: "/home" },
  { text: "About", page: "/about" },
  { text: "Contact", page: "/contact" },
  { text: "Reservations", page: "/reservations" },
  { text: "Order Online", page: "/booking" },
  { text: "Login", page: "/login" },
];

const Contact = [
  { text: "Address", page: "/address" },
  { text: "Phone Number", page: "/phone" },
  { text: "Email", page: "/email" },
];

const SocialMedia = [
  { text: "Address", page: "/address" },
  { text: "Phone Number", page: "/phone" },
  { text: "Email", page: "/email" },
];

function Footer() {
  return (
    <footer>
      <img src={logo} alt="little lemon logo"></img>
      <div className="footer-container">
        <ul>
          <h3>Doormat Navigation</h3>
          {DoormatNavigation.map((link) => (
            <li key={link.text}>
              <Link to={link.page}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <h3>Contact</h3>
          {Contact.map((link) => (
            <li key={link.text}>
              <Link to={link.page}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <h3>Social Media</h3>
          {SocialMedia.map((link) => (
            <li key={link.text}>
              <Link to={link.page}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
