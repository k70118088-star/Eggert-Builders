"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "@/utils/helper";

const OurService = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="w-full overflow-hidden py-20 sm:py-28 lg:py-37.5 px-4 sm:px-6 min-[1330px]:px-0">
      <div className="mx-auto max-w-328 w-full">
        {/* TOP */}
        <div className="flex flex-col justify-between gap-8 sm:gap-10 md:flex-row md:items-end">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-[10px] sm:text-[12px] uppercase font-medium leading-150 jost tracking-20 text-gray-primary">
              WHAT WE DO
            </p>

            <h2 className="cormorant text-[40px] sm:text-[48px] lg:text-custom-6xl leading-120 font-normal text-dark-primary">
              Our <em className="italic">Services</em>
            </h2>
          </div>

          {/* RIGHT BUTTON */}
          <a
            href="#contactus"
            className="underline cursor-pointer underline-offset-[25%] text-[11px] sm:text-[12px] tracking-20 font-medium jost leading-150 text-dark-primary transition-all duration-300 hover:opacity-70"
          >
            REQUEST A CONSULTATION
          </a>
        </div>

        {/* SERVICE CARDS */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div key={index} data-aos="zoom-out" data-aos-delay={index * 350}>
              <div className="border flex flex-col justify-between cursor-pointer h-65 sm:h-73.5 group border-gray-light p-6 sm:p-8 transition-all duration-700 hover:bg-offwhite">
                {/* NUMBER */}
                <div >
                <p className="text-[11px] sm:text-[12px] leading-150 jost font-medium tracking-20 text-gray-primary">
                  {item.number}
                </p>

                {/* TITLE */}
                <h3 className="cormorant mt-4 text-[28px] sm:text-custom-4xl font-normal leading-120 text-dark-primary">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 max-w-93.25 text-[15px] sm:text-base font-normal leading-150 text-gray-dark">
                  {item.description}
                </p>
                </div>
                {/* BUTTON */}
                <div className="overflow-hidden">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <button className="underline underline-offset-[25%] jost font-medium text-[11px] sm:text-[12px] leading-150 tracking-20 text-dark-primary">
                      {item.button}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
