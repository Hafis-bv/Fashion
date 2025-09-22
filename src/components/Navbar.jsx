import React, { useEffect, useState } from "react";
import Container from "./Container";
import { MdMenu } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavActive(false);
    });
  }, []);

  const navLinks = [
    {
      id: 1,
      title: "CATALOGUE",
      href: "#",
    },
    {
      id: 2,
      title: "FASHION",
      href: "#",
    },
    ,
    {
      id: 3,
      title: "FAVOURITE",
      href: "#",
    },
    {
      id: 4,
      title: "LIFESTYLE",
      href: "#",
    },
  ];
  return (
    <nav className="py-6">
      <Container className="flex items-center justify-between">
        <img src="/logo.svg" alt="" />
        <div className="hidden lg:flex items-center gap-10 ">
          {navLinks.map((navLink) => (
            <a
              key={navLink.id}
              className=" uppercase font-medium text-[19px]"
              href={navLink.href}
            >
              {navLink.title}
            </a>
          ))}
          <button className="uppercase font-medium text[20px] bg-black text-white rounded-[7px] cursor-pointer px-[22px] pt-[13px] pb-[17px]">
            Sign up
          </button>
        </div>
        <button
          className="lg:hidden cursor-pointer z-6"
          onClick={() => {
            setNavActive(!navActive);
          }}
        >
          {navActive ? <IoCloseOutline size={50} /> : <MdMenu size={50} />}
        </button>

        {/* mobile menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/70 transition-all duration-300 flex flex-col items-center gap-10 justify-center ${
            navActive ? "left-0" : "left-[-100%]"
          } `}
        >
          {navLinks.map((navLink) => (
            <a
              key={navLink.id}
              className=" text-white uppercase font-medium text-[19px]"
              href={navLink.href}
            >
              {navLink.title}
            </a>
          ))}
          <button className="uppercase font-medium text[20px] bg-white text-black rounded-[7px] cursor-pointer px-[22px] pt-[13px] pb-[17px]">
            Sign up
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
