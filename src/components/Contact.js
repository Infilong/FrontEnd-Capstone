import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to send message
  };

  return (
    <>
      <div className="body-flex-container">
        <div className="box">
          <h1>Contact Us</h1>
          <h3>Please enter your name, email and message</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Name: </label>
            <input
              className="userInfo"
              type="text"
              value={name}
              placeholder="Username"
              id="username"
              onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="email">Email: </label>
            <input
              className="userInfo"
              id="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <label>Message:</label>
            <textarea
              placeholder="Your message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="userInfo"
            />

            <input
              type="submit"
              value="Send Message"
              className="submit"
              aria-label="On Click"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
