import React, { useState } from "react";
import Dropdown from "./Dropdown";
import logo from "../assets/PRATIK.svg";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const clickHandler = (isOpen) => {
    setIsDropdownOpen(isOpen);
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
        <div className="md:flex pt-6 justify-around hidden  gap-10 ml-auto max-w-3xl">
          <a className="md:text-xl hidden md:block uppercase" href="#project">
            projects
          </a>
          <a className="md:text-xl hidden md:block uppercase" href="">
            contact
          </a>
        </div>
      </div>
      {isDropdownOpen ? (
        <div className="bg-black text-white flex flex-col">
          <a className="text-md p-4 uppercase" href="">
            projects
          </a>
          <a className="text-md p-4 uppercase" href="">
            contact
          </a>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
