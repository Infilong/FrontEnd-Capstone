import React from "react";

function Footer(props) {
  return (
    <>
      <footer>
        <div class="footer-column">
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
