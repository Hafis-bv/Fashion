import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container className="flex justify-center xl:justify-between items-center px-18 pt-10 bg-[#F4F6F5] rounded-[59px] ">
      <div className="flex flex-col text-center xl:text-left gap-8">
        <h1 className=" font-black text-[70px] uppercase max-w-118">
          LET’S EXPLORE UNIQUE CLOTHES.
        </h1>
        <p className=" text-2xl mt-2">
          Live for Influential and Innovative fashion!
        </p>
        <button className=" mx-auto lg:mx-0 cursor-pointer w-max bg-black px-10 py-4.5 text-white rounded-[10px]">
          Shop Now
        </button>
      </div>
      <img className="hidden xl:block w-full" src="/hero.png" alt="" />
    </Container>
  );
};

export default Hero;
