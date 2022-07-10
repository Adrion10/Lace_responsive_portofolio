import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXing,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#002233"
            fill-opacity="1"
            d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,74.7C840,64,960,64,1080,74.7C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="row justify-content-center footer-content">
          <div className="col-md-6">
            <p>Designed and Developed by Lace</p>
            <hr />
            <div className="d-flex justify-content-between">
              <FaFacebook />
              <FaInstagram />
              <FaXing />
              <FaLinkedinIn />
              <FaGithub />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
