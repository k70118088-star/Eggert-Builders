"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { process } from "@/utils/helper";

const HowWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
  }, []);

  return (
    <section className="bg-[#050505] py-16 sm:py-24 lg:py-30 overflow-hidden">
      <div className="mx-auto max-w-328 px-4 sm:px-5">

        {/* TOP */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">

          {/* LEFT */}
          <div data-aos="fade-right">
            <p className="mb-4 jost text-[10px] sm:text-[12px] font-medium uppercase leading-150 tracking-20 text-white/40">
              HOW IT WORKS
            </p>

            <h2 className="cormorant max-w-133.25 text-[38px] sm:text-[48px] lg:text-custom-6xl font-normal leading-[115%] sm:leading-120 text-white">
              A process built on <em className="italic">trust</em>
              <br />
              and transparency.
            </h2>
          </div>

          {/* RIGHT */}
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="max-w-133.25 jost text-[15px] sm:text-base leading-150 text-white/60"
          >
            We’ve refined our approach over three decades to make the custom
            home building process as clear and stress-free as possible — from
            first conversation to move-in day.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-10 sm:mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          
          {process.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="border border-[#FFFFFF1F] bg-black-soft p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/30"
            >

              {/* NUMBER */}
              <h3 className="cormorant text-[44px] sm:text-[50px] lg:text-custom-6xl font-normal leading-120 text-white/12">
                {item.number}
              </h3>

              {/* TITLE */}
              <h4 className="cormorant mt-3 text-[28px] sm:text-[30px] lg:text-custom-4xl font-normal leading-120 text-white">
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="mt-3 jost text-[15px] sm:text-base font-normal leading-150 text-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorks;