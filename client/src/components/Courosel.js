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
          <span>
            <FaReact color="cyan" />
          </span>
          <span>
            <FaJsSquare color="yellow" />
          </span>
          <span>
            <FaNodeJs color="green" />
          </span>
          <span>
            <FaAngular color="orangered" />
          </span>
          <span>
            <FaReact />
          </span>
          <span>
            <FaBootstrap color="blue" />
          </span>
          <span>
            <FaCss3 color="blue" />
          </span>
          <span>
            <FaHtml5 color="orange" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Courosel;
