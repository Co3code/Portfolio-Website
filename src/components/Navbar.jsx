import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const resumeUrl = "/Resume.pdf";
  const hasResume = false;

  const toggleResume = () => {
    if (hasResume) {
      window.open(resumeUrl);
    } else {
      alert("No resume available yet.");
    }
  };

  const isAndroid = /Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (toggle) {
      setActive("");
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? "flex flex-col" : "hidden sm:flex"} flex-row gap-6 items-center`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? "text-white" : isSecondary ? "text-secondary" : "text-white"
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={() => {
            if (link.id !== "download") {
              setActive(link.title);
            }
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          {/* This part handles the "Download" link if it exists in your constants */}
          {link.id === "download" ? (
            <a
              href="https://github.com/Co3code/Portfolio-Website/releases/download/v1.0.0/TchLian-v1.apk"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ) : (
            <a href={`#${link.id}`}>{link.title}</a>
          )}
        </li>
      ))}

      {/* Manual Resume Link */}
      <li
        className={`hover:text-white text-[20px] font-medium cursor-pointer ${isSecondary ? "text-secondary" : "text-white"}`}
      >
        <button onClick={toggleResume}>Resume</button>
      </li>

      {/* Manual Facebook Link */}
      <li className="flex items-center">
        <a href="https://www.facebook.com/cy.yan.539259" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} className="text-[#915EFF] hover:text-white transition-all cursor-pointer" />
        </a>
      </li>
    </ul>
  );

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[20px] font-bold cursor-pointer flex">
            Tch&nbsp;
            <span className="sm:block hidden">Lian</span>
          </p>
        </Link>

        {renderNavLinks(false)}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
              toggle ? "flex" : "hidden"
            }`}
          >
            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
