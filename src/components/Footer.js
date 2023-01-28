import React from "react";
import logo from "../images/littleLemonLogo.png";

const DoormatNavigation = [
  { text: "Home", href: "/home" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Reservations", href: "/reservations" },
  { text: "Order Online", href: "/order-online" },
  { text: "Login", href: "/login" },
];

const Contact = [
  { text: "Address", href: "/address" },
  { text: "Phone Number", href: "/phone" },
  { text: "Email", href: "/email" },
];

const SocialMedia = [
  { text: "Address", href: "/address" },
  { text: "Phone Number", href: "/phone" },
  { text: "Email", href: "/email" },
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
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <ul>
          <h3>Contact</h3>
          {Contact.map((link) => (
            <li key={link.text}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <ul>
          <h3>Social Media</h3>
          {SocialMedia.map((link) => (
            <li key={link.text}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
