import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="intruduction"
        style={{ backgroundImage: `url('./wave1.svg')` }}
      >
        <div>
          <h1>Lace</h1>
          <div className="intro_content">
            <p>
              Junior <br /> Web Developer
            </p>
            <button className="primary-button"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
