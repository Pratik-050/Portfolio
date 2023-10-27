import React from "react";
import weather from "../assets/weather.png";

function Projects() {
  return (
    <>
      <h1
        id="project"
        className="text-xl text-gray-500 ml-6 font-bold lg:ml-16 my-4"
      >
        My Projects
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap px-6 md:px-40 justify-between">
        <div className="md:w-[40%] py-4">
          <a
            href="https://pratik-050.github.io/Weather-app/"
            target="_blank"
            className="p-6 h-40"
          >
            <img src={weather} alt="weather" />
          </a>
        </div>
        <div className="md:w-[40%] py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          dignissimos quos ut labore ipsum tenetur in molestiae? Eos,
          accusantium quia.
        </div>
        <div className="md:w-[40%] py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          dignissimos quos ut labore ipsum tenetur in molestiae? Eos,
          accusantium quia.
        </div>
        <div className="md:w-[40%] py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          dignissimos quos ut labore ipsum tenetur in molestiae? Eos,
          accusantium quia.
        </div>
      </div>
    </>
  );
}

export default Projects;
