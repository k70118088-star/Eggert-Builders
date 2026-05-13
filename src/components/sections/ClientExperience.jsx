"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full overflow-hidden py-16 sm:py-24 lg:py-37.5">
      
      <div className="mx-auto flex max-w-328 w-full flex-col gap-8 sm:gap-10 px-4 sm:px-5 lg:flex-row lg:items-start lg:justify-between">

        {/* LEFT */}
        <div data-aos="fade-right">
          <p className="jost text-[10px] sm:text-[12px] font-medium uppercase leading-150 tracking-20 text-gray-primary">
            CLIENT EXPERIENCE
          </p>
        </div>

        {/* RIGHT */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="max-w-216.75 w-full"
        >

          {/* QUOTE */}
          <h2 className="cormorant italic text-[28px] sm:text-[34px] md:text-[40px] font-normal leading-120 text-dark-primary">
            "Eggert Builders walked us through every single decision with
            patience and real expertise. They built our home as if it were
            their own — and it shows in every last detail."
          </h2>

          {/* CLIENT INFO */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-8 sm:mt-10"
          >
            <h3 className="jost text-[15px] sm:text-base font-semibold leading-150 text-dark-primary">
              The Kowalski Family
            </h3>

            <p className="mt-0.5 jost text-[15px] sm:text-base font-semibold leading-150 text-gray-primary">
              Saint John, IN · Custom Home
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;