import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="header">
      {showHeader ? (
        <RiCloseFill
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className="menu-icon position-fixed top-0 end-0"
        />
      ) : (
        <RiMenu3Fill
          className="menu-icon position-fixed top-0 end-0"
          onClick={() => {
            setShowHeader(!showHeader);
          }}
        />
      )}
      <ul className={`${showHeader ? "show-header" : "hide-header "} n-box1`}>
        <li>
          <Link to="/">Home</Link>{" "}
        </li>

        <li>
          <Link to="/project">Project</Link>
        </li>

        <li>
          <Link to="courses">Courses</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
