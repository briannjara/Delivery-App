import React, { useEffect } from "react";
import "./Header.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS JavaScript

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      easing: "ease", // Easing pattern
    });
  }, []);

  return (
    <div className="header">
      <div data-aos="fade-in" className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
          Discover a seamless food delivery experience with our app, offering a
          diverse range of cuisines, real-time order tracking, exclusive deals,
          and user-friendly navigation to satisfy your cravings anytime,
          anywhere.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
