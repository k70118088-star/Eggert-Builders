"use client";

import Image from "next/image";
import Button from "../common/Button";
import { features } from "@/utils/helper";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      offset: 100,
    });
  }, []);

  return (
    <section className="overflow-hidden bg-[#f7f7f5]">
      <div className="mx-auto flex min-h-238 max-w-360 flex-col xl:flex-row">

        {/* LEFT IMAGE */}
        <div
          data-aos="fade-right"
          className="relative h-[350px] sm:h-[500px] w-full max-w-full xl:max-w-177 lg:h-238"
        >
          <Image
            src="/assets/images/webp/about-img.webp"
            alt="about"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          data-aos="fade-left"
          className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-14 sm:py-20 lg:px-16"
        >
          <div className="max-w-151 w-full">

            {/* SMALL TEXT */}
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mb-4 jost text-[10px] sm:text-[12px] font-medium uppercase leading-150 tracking-20 text-gray-primary"
            >
              ABOUT EGGERT BUILDERS
            </p>

            {/* HEADING */}
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="cormorant text-[38px] sm:text-[46px] md:text-custom-6xl font-normal leading-[115%] sm:leading-120 text-[#0a0a0a]"
            >
              We are carpenters
              <br />
              by trade. <em className="italic">Craftsmen</em>
              <br />
              at heart.
            </h2>

            {/* PARAGRAPH 1 */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-3 jost text-[15px] sm:text-base font-normal leading-150 text-gray-dark"
            >
              Eggert Builders is a family-owned custom home and light commercial
              builder based in Saint John, Indiana. For decades, we've served
              Northwest Indiana families with the same guiding belief: every
              home we build should be as thoughtfully crafted as if we were
              building it for ourselves.
            </p>

            {/* PARAGRAPH 2 */}
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-3 jost text-[15px] sm:text-base font-normal leading-150 text-gray-dark"
            >
              From helping you choose the right lot to handing over the keys, we
              are your partner from start to finish — with complete transparency
              at every step.
            </p>

            {/* FEATURES */}
            <div className="mt-8 sm:mt-10 space-y-2">
              {features.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={500 + index * 100}
                  className="flex items-start sm:items-center gap-4 sm:gap-5"
                >
                  <span className="w-5 sm:w-6 border border-gray-dark mt-3 sm:mt-0"></span>

                  <p className="jost text-[15px] sm:text-base font-normal leading-150 text-gray-dark">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div
              data-aos="zoom-in"
              data-aos-delay="900"
              className="mt-8 sm:mt-10"
            >
              <Button text={"WORK WITH US"} variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;