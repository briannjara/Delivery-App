import React, { useState, useEffect } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS JavaScript

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrSate] = useState("Login");

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      easing: "ease", // Easing pattern
      once: true, // Animation will happen only once

    });
  }, []);

  return (
    <div className="login-popup">
      <form data-aos="fade-up" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>

        <button>{currState === "Sign up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrSate("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrSate("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
