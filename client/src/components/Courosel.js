import React from "react";
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaAngular,
} from "react-icons/fa";

const Courosel = () => {
  return (
    <div>
      <div className="courosel-parent position-relative">
        <h1 className="position-absolute top-0 right-0 text-center p-5">
          Technologs I use
        </h1>
        <div className="gallery">
          <span style={{ "--i": 1 }}>
            <FaReact color="cyan" />
          </span>
          <span style={{ "--i": 2 }}>
            <FaBootstrap color="blue" />
          </span>
          <span style={{ "--i": 3 }}>
            <FaNodeJs color="green" />
          </span>
          <span style={{ "--i": 4 }}>
            <FaAngular color="orangered" />
          </span>
          <span style={{ "--i": 5 }}>
            <FaReact />
          </span>

          <span style={{ "--i": 6 }}>
            <FaJsSquare color="yellow" />
          </span>
          <span style={{ "--i": 7 }}>
            <FaCss3 color="blue" />
          </span>
          <span style={{ "--i": 8 }}>
            <FaHtml5 color="orange" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Courosel;
