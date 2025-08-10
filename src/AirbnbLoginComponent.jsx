import React from 'react';
import './style.css';

export default function AirbnbLoginComponent() {
  return (
    <div className="login-container">
      <h1>Login to Airbnb</h1>
      
      <form action="https://www.airbnb.co.in/" method="get">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input
  type="email"
  id="email"
  name="email"
  placeholder="example@gmail.com"
  pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
  required
/>


        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          minLength="8"
          required
        />

        <button type="submit" className="continue-btn">Continue</button>
      </form>

      <hr />
      <div className="social-login">
        <p>Or Login with</p>
        <a href="https://accounts.google.com" className="google-btn">
          <img
            src="https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png?v=2025061907"
            alt="Google"
            className="google-icon"
          />
          Continue with Google
        </a>
      </div>
    </div>
  );
}
