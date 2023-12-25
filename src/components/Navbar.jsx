import React, { useState } from "react";
import Dropdown from "./Dropdown";
import logo from "../assets/PRATIK.svg";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const clickHandler = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };
  const projects = document.querySelector("#project");
  const contacts = document.querySelector("#contact");
  const scrollHandlerProjects = () => {
    projects.scrollIntoView({ behavior: "smooth" });
  };
  const scrollHandlerContacts = () => {
    contacts.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="flex px-6 md:px-48 bg-black text-white mx-auto">
        <img
          src={logo}
          alt="PRATIK"
          className="md:w-36 md:h-24 md:mt-0 mt-4 w-20 h-10 my-2 md:my-0"
        />
        <Dropdown onChange={clickHandler} />
        <div className="md:flex justify-around hidden  gap-10 ml-auto max-w-3xl">
          <button
            className="md:text-xl hidden md:block uppercase"
            onClick={scrollHandlerProjects}
          >
            projects
          </button>
          <button
            className="md:text-xl hidden md:block uppercase"
            onClick={scrollHandlerContacts}
          >
            contact
          </button>
        </div>
      </div>
      {isDropdownOpen ? (
        <div className="bg-black text-white flex flex-col">
          <button
            className="text-md p-4 uppercase"
            onClick={scrollHandlerProjects}
          >
            projects
          </button>
          <button
            className="text-md p-4 uppercase"
            onClick={scrollHandlerContacts}
          >
            contact
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
