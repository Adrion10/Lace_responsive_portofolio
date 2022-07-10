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
            fillOpacity="1"
            d="M0,160L60,144C120,128,240,96,360,112C480,128,600,192,720,197.3C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="row justify-content-center footer-content">
          <div className="col-md-6">
            <p>Designed and Developed By</p>
            <hr />
            <div className="d-flex justify-content-between px-3">
              <FaFacebook className="footer-icons" />
              <FaInstagram className="footer-icons" />
              <FaXing className="footer-icons" />
              <FaLinkedinIn className="footer-icons" />
              <FaGithub className="footer-icons" />
            </div>
            <hr />
            <br />
            <p>Lace Hilaj</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
