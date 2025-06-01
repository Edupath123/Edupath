import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Features", link: "/#features" },
  { id: 3, name: "How it works", link: "/#howwork" },
  { id: 4, name: "About", link: "/#about" },
  { id: 5, name: "Contact", link: "/#contact" },
];

const DropdownLinks = [
  { id: 1, name: "Medical", link: "/#" },
  { id: 2, name: "IT", link: "/#" },
  { id: 3, name: "Govt.", link: "/#" },
  { id: 4, name: "Startup", link: "/#" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Top Bar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center px-4">
          <a
            href="#"
            className="text-2xl md:text-4xl font-extrabold text-indigo-900 drop-shadow-[0_0_25px_rgba(79,70,229,0.8)] hover:text-indigo-800 transition duration-300"
          >
            Welcome To Edupath World
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex download h-10 w-28 bg-blue-800 text-yellow-50 rounded-xl justify-center items-center hover:px-6 py-3 text-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-500 cursor-pointer">
              <button className="btn font-semibold text-[19px]">Download</button>
            </div>

            {/* Hamburger to Cross Animation */}
            <div
              className="md:hidden flex flex-col gap-[5px] w-[28px] cursor-pointer z-[100] relative"
              onClick={toggleMenu}
            >
              <span
                className={`h-[3px] w-full bg-black dark:bg-white rounded transition-transform duration-300 ease-in-out origin-left ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              />
              <span
                className={`h-[3px] w-full bg-black dark:bg-white rounded transition-opacity duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[3px] w-full bg-black dark:bg-white rounded transition-transform duration-300 ease-in-out origin-left ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex justify-center">
        <ul className="flex items-center gap-4 py-3" data-aos="zoom-in">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#domain" className="flex items-center gap-1 py-2">
              DOMAIN
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute z-50 hidden group-hover:block w-48 rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="block p-2 rounded-md hover:bg-primary/20"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 w-64 h-full bg-white dark:bg-slate-800 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 mt-20 pl-6 pr-4">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="block py-2 text-lg font-medium hover:text-primary duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          {/* Dropdown in Mobile */}
          <li>
            <p className="text-lg font-semibold mt-4">DOMAIN</p>
            <ul className="pl-2 mt-2 space-y-2">
              {DropdownLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="block hover:text-primary transition-all duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
