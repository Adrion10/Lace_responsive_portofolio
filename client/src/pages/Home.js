import React from "react";
import Header from "../components/Header";
import Couresel from "../components/Courosel";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="intruduction flex-with-center "
        style={{ backgroundImage: `url('./wave.svg')` }}
      >
        <div>
          <h1>Lace Hilaj</h1>
          <div className="intro_content d-flex justify-content-between">
            <p>
              Junior <br /> Web Developer
            </p>
            <button className="primary-button font-bold">Get Started</button>
          </div>
        </div>
      </div>
      <Couresel />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#002233"
            fill-opacity="1"
            d="M0,96L48,117.3C96,139,192,181,288,170.7C384,160,480,96,576,74.7C672,53,768,75,864,101.3C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 px-3 py-4 font-bold">
              <h1>Yes you are right...</h1>
              <br />
              <p>I am Junior Web developer</p>
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-center">
          <div className="col-md-4 ">
            <div>
              <img src="./WebDeveloper.svg" alt="webdev" />
            </div>
          </div>
        </div>
        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 px-3 py-4 font-bold">
              <h1>Yes you are right</h1>
              <p>I am Junior Web developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
