"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
  }, []);

  return (
    <section className="overflow-hidden bg-offwhite py-16 sm:py-24 lg:py-30">
      
      <div className="mx-auto max-w-328 px-4 sm:px-5">

        {/* TOP */}
        <div className="mb-10 sm:mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          {/* LEFT */}
          <div data-aos="fade-right">
            <p className="mb-4 jost text-[10px] sm:text-[12px] font-medium uppercase leading-150 tracking-20 text-gray-primary">
              SELECTED PROJECTS
            </p>

            <h2 className="cormorant text-[40px] sm:text-[48px] lg:text-custom-6xl font-normal leading-120 text-dark-primary">
              Our <span className="italic">Work</span>
            </h2>
          </div>

          {/* RIGHT */}
          <button
            data-aos="fade-left"
            data-aos-delay="200"
            className="jost text-[11px] sm:text-[12px] font-medium uppercase leading-150 tracking-20 text-dark-primary underline underline-offset-[25%]"
          >
            DISCUSS YOUR PROJECT
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12">

          {/* LEFT BIG IMAGE */}
          <div
            data-aos="zoom-in-right"
            className="col-span-12 lg:col-span-6"
          >
            <div className="group relative h-full min-h-80 sm:min-h-125 lg:min-h-167.75 overflow-hidden border-4 sm:border-6 lg:border-8 border-offwhite">
              <Image
                src="/assets/images/webp/our-img1.webp"
                alt="work"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="col-span-12 grid grid-cols-2 lg:col-span-6">

            {/* TOP LEFT */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group relative min-h-45 sm:min-h-65 lg:min-h-107.25 overflow-hidden border-4 sm:border-6 lg:border-8 border-offwhite"
            >
              <Image
                src="/assets/images/webp/our-img-two.webp"
                alt="work"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>

            {/* TOP RIGHT */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="group relative min-h-45 sm:min-h-65 lg:min-h-107.25 overflow-hidden border-4 sm:border-6 lg:border-8 border-offwhite"
            >
              <Image
                src="/assets/images/webp/our-img3.webp"
                alt="work"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>

            {/* BOTTOM LEFT */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="group relative min-h-35 sm:min-h-50 lg:min-h-60.5 overflow-hidden border-4 sm:border-6 lg:border-8 border-offwhite"
            >
              <Image
                src="/assets/images/webp/our-img4.webp"
                alt="work"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>

            {/* BOTTOM RIGHT */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="group relative min-h-35 sm:min-h-50 lg:min-h-60.5 overflow-hidden border-4 sm:border-6 lg:border-8 border-offwhite"
            >
              <Image
                src="/assets/images/webp/our-img5.webp"
                alt="work"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;