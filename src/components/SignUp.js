import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";

const SignUp = () => {
  const [customerSignUp, setCustomerSignUp] = useState(
    { email: '', password: '', repass: '', username: '' }
  );
  console.log(customerSignUp);
  const handleChange = (event) => {
    setCustomerSignUp({ ...customerSignUp, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/signup', customerSignUp)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  return (
    <section>
      <Navbar/>
      <div className="registration-container">
        <h1>Registration Form</h1>
        <form id='register-form' onSubmit={handleSubmit}>
          <label>Username:
            <input
              placeholder="Username"
              name="username"
              required type="text"
              onChange={handleChange}
            />
          </label>
          <label>Email:
            <input
              placeholder="Email"
              name="email"
              required
              type="email"
              onChange={handleChange}
            />
          </label>
          <label>Password:
            <input
              placeholder="Password"
              name="pass"
              required
              type="password"
              onChange={handleChange}
            />
          </label>
          <label>Re-password:
            <input
              placeholder="Re Password"
              name="repass"
              required
              type="password"
              onChange={handleChange}
            />
          </label>
          <button>Register</button>
          <label htmlFor='register-form' className="register-label">Already Member ? Sign In</label>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
