import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to log in the user
  };

  return (
    <>
      <div className="body-flex-container">
        <div className="box">
          <h1>Login</h1>
          <h3>Please enter your username and password</h3>
          <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input
              className="userInfo"
              type="text"
              value={username}
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />

            <label>Password:</label>
            <input
              className="userInfo"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <input type="submit" value="Login" className="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
