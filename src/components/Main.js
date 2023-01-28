import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import About from "./About";
import Contact from "./Contact";
import Reservations from "./Reservations";
import Login from "./Login";
import Nav from "./Nav";
import Footer from "./Footer";

function Main(props) {
  return (
    <>
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default Main;
