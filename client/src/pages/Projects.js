import React from "react";
import Header from "../components/Header";
import { FaLaptopCode } from "react-icons/fa";
import projectData from "./projectData";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="container projects-info">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 n-box2 px-3 py-5">
            <div>
              <h1 className="font-bold">Projects</h1>
              <p className="font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                culpa, amet voluptate et delectus asperiores reprehenderit
                beatae nisi quos fugit vitae tempore ducimus suscipit mollitia
                omnis repellendus accusantium! Voluptate, doloribus.
              </p>
              <button className="primary-button">Get Started</button>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0F62FE"
                d="M38.5,-64.9C51.5,-59.3,64.6,-52.1,73.8,-41C83,-29.9,88.2,-15,86.7,-0.9C85.1,13.2,76.8,26.3,68.5,39C60.2,51.6,52,63.7,40.6,73.6C29.2,83.5,14.6,91.3,0.8,89.9C-13,88.5,-25.9,77.9,-39.6,69.3C-53.4,60.7,-67.8,54.1,-76.8,42.9C-85.9,31.7,-89.5,15.8,-87.4,1.2C-85.3,-13.4,-77.4,-26.8,-70.1,-40.9C-62.7,-55.1,-55.9,-70,-44.3,-76.4C-32.7,-82.8,-16.3,-80.6,-1.8,-77.6C12.8,-74.5,25.6,-70.5,38.5,-64.9Z"
                transform="translate(100 100)"
              />
            </svg>
            <FaLaptopCode
              color="white"
              size="200"
              className="position-absolute top-50 start-50 translate-middle"
            />
          </div>
        </div>
      </div>
      <div className="container projects-list">
        <h3 classNAme="font-bold">Take a look of my Projects</h3>
        <hr />
        <div className="row">
          {projectData.map((project) => {
            return (
              <div className="col-md-4">
                <div className="position-relative project">
                  <img src={project.path} alt="" />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <hr />
                    <p>{project.desc}</p>
                    <button className="primary-button">DEMO</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
