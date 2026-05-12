"use client";
import React, { useEffect } from "react";
import Button from "../common/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-center bg-cover bg-[url('/assets/images/webp/hero.webp')] px-4 sm:px-6 lg:px-0">
      
      <div className="max-w-328 mx-auto w-full flex items-center justify-start min-[1350px]:px-0 px-4 pt-40 sm:pt-44 lg:pt-45">
        
        <div className="max-w-157 w-full">
          
          <p className="mb-4 text-[10px] sm:text-[12px] font-medium leading-150 jost tracking-20 text-white">
            NORTHWEST INDIANA · CUSTOM HOME BUILDER · SAINT JOHN, IN
          </p>

          <h1
            data-aos="fade-up"
            className="cormorant text-[48px] sm:text-[65px] md:text-[80px] lg:text-[100px] font-normal text-white leading-[115%] sm:leading-[120%]"
          >
            Homes Built <br /> As If They Were
            <span className="italic"> Our Own</span>.
          </h1>

          <div
            data-aos="fade-right"
            className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mt-8"
          >
            <Button text={"START A CONVERSATION"} variant="secondary" />

            <p className="font-medium leading-150 cursor-pointer jost tracking-20 text-white text-[11px] sm:text-[12px] underline underline-offset-[25%] uppercase">
              View our work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;