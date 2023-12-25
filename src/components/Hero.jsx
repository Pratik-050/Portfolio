import React from "react";
import pratik from "../assets/image.png";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row bg-black px-6 md:px-48 gap-4 mx-auto text-white h-[90%]">
      <div className="flex flex-col gap-2 max-w-xl">
        <div className="text-yellow-400 text-xl pt-4 md:pt-10">
          web designer and competitive programmer
        </div>
        <h1 className="text-4xl md:text-7xl uppercase py-4 tracking-wide leading-normal font-bold">
          hi, I am a web developer
        </h1>
        <div className="uppercase text-gray-400 text-md tracking-wider">
          Always learning new things, helps you make your own website. get in
          touch and ask for collaboration.
        </div>
        <a
          href="mailto:pratikpal050+business@gmail.com"
          className="bg-yellow-500 text-center text-black w-32 p-2 font-bold mt-6 md:mt-10 rounded-xl"
          target="_blank"
        >
          Send a mail
        </a>
      </div>
      <div className="relative md:ml-auto">
        <div className="absolute bg-yellow-500 text-yellow-500 top-10 left-6 md:top-10 md:left-10 animate-spin-slow z-20 w-10 h-10">
          .
        </div>
        <img
          src={pratik}
          alt="png"
          loading="lazy"
          className="mx-auto md:mx-0 md:pl-16 pt-6 w-44 md:w-80 lg:w-auto"
        />
        <div className="absolute bg-white text-white bottom-4 right-10 md:bottom-20 md:right-10 animate-spin-slow2 z-20 w-6 h-6">
          .
        </div>
      </div>
    </div>
  );
}

export default Hero;
