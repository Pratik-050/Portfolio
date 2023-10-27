import React from "react";
import mongo from "../assets/mongoDB.png";
import cpp from "../assets/cpp.png";
import js from "../assets/logo-javascript.svg";
import git from "../assets/Git-Icon-Black.svg";
import reactLogo from "../assets/react.svg";
import node from "../assets/nodejs-icon.svg";
import express from "../assets/expressjs-icon.svg";

function Skills() {
  return (
    <>
      <h1 className="text-xl text-gray-500 ml-6 font-bold lg:ml-16 mt-4">
        Tech I know
      </h1>
      <div className="flex px-6 lg:px-0 justify-around my-6 flex-wrap">
        <img src={git} alt="GIT" className="w-24 p-4" />
        <img src={js} alt="JS" className="w-24 p-4 grayscale-[100%]" />
        <img src={mongo} alt="mongoDB" className="w-24 grayscale-[100%]" />
        <img src={cpp} alt="C++" className="w-24 p-6 grayscale-[100%]" />
        <img
          src={reactLogo}
          alt="React"
          className="w-24 p-4 grayscale-[100%]"
        />
        <img src={node} alt="Nodejs" className="grayscale-[100%] w-24 p-4" />
        <img src={express} alt="Expressjs" className="w-24 p-4" />
      </div>
    </>
  );
}

export default Skills;
