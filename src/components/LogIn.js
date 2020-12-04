import React, { useState } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  console.log(email, psw);
  
  const SendLogInData = () => {
  
  }
  return (
    <div className="login-container">
      <h1>Login Form</h1>
      <form onSubmit={SendLogInData}>
        <label>Email:
          <input
            name="username"
            placeholder="Username"
            required
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>Password:
          <input
            name="pass"
            placeholder="Password"
            required
            type="password"
            onChange={(e) => setPsw(e.target.value)}
          />
        </label>
        <input type="submit"/>
      </form>
    </div>
  );
};

export default LogIn;
