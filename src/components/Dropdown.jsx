import React, { useState } from "react";
import dropdownLogo from "../assets/dropdown.png";

function Dropdown({ onChange }) {
  const [isOpen, setIsOpen] = useState(true);
  const clickHandler = () => {
    setIsOpen((prev) => !prev);
    onChange(isOpen);
  };
  return (
    <>
      <button
        className="text-white md:hidden block ml-auto"
        onClick={clickHandler}
      >
        <img
          src={dropdownLogo}
          alt="drop"
          className={`w-6 mt-2 ${isOpen ? "rotate-0" : "rotate-180"}`}
        />
      </button>
    </>
  );
}

export default Dropdown;
