import React from "react";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";

function Contact() {
  return (
    <div className="relative">
      <div className="bg-yellow-500 text-yellow-500 w-6 h-6 absolute top-6 left-10 animate-spin-slow">
        .
      </div>
      <div className="bg-white text-white w-6 h-6 absolute bottom-6 right-10 animate-spin-slow2">
        .
      </div>
      <div
        id="contact"
        className="bg-black text-white flex flex-col md:flex-row justify-between py-10 px-6 md:px-40"
      >
        <div className="text-center md:text-left md:mt-3">
          Made with ❤ by <span className="text-yellow-400">Pratik</span>
        </div>
        <div className="flex justify-between w-[60%] md:w-[30%] mx-auto md:mx-0 mt-4 md:mt-0">
          <a href="https://github.com/Pratik-050" target="_blank">
            <img src={github} alt="github" className="w-10 md:w-12" />
          </a>
          <a
            href="https://instagram.com/the_martianbody?igshid=YWYwM2I1ZDdmOQ=="
            target="_blank"
          >
            <img src={instagram} alt="instagram" className="w-10 md:pt-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-chandra-pal-013525255/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Beu8LGn0hSZGu0E3w%2BJqVqg%3D%3D"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" className="w-10 md:w-12" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100085905395706"
            target="_blank"
          >
            <img src={facebook} alt="Fb" className="w-10 md:w-12" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
