import React from "react";
import Header from "../components/Header";

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
    </div>
  );
};

export default Home;
