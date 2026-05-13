"use client"
import React, { useEffect } from "react";
import Icons from "../common/Icons";
import { status } from "@/utils/helper";
import AOS from "aos";
import "aos/dist/aos.css";

const Status = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-0">
      
      <div className="mx-auto max-w-328 w-full grid grid-cols-2 gap-y-10 sm:gap-y-14 lg:flex lg:items-center lg:justify-between">
        
        {status.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="flex flex-col items-center justify-center text-center"
          >
            
            {/* NUMBER */}
            <h2 className="cormorant text-[38px] sm:text-5xl leading-100 flex items-end text-white">
              {item.number}

              <span>
                <Icons icon={item.icon} />
              </span>
            </h2>

            {/* LABEL */}
            <p className="mt-3 text-[10px] sm:text-[12px] font-medium leading-150 jost tracking-20 text-white/40">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Status;