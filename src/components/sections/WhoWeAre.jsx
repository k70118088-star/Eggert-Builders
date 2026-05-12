"use client"
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const WhoWeAre = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      className='my-20 sm:my-28 lg:my-37.5 max-w-328 mx-auto w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0 px-4 sm:px-6 lg:px-0'
    >
      
      <div>
        <p className='uppercase text-gray-primary text-[10px] sm:text-[12px] font-medium leading-150 jost tracking-20'>
          Who We Are
        </p>
      </div>

      <div className='max-w-216.75 w-full'>
        
        <p className='text-dark-secondary mb-2 jost font-semibold text-[26px] sm:text-custom-4xl leading-120'>
          Chicagoland's most trusted custom home builder.
        </p>

        <p className='jost text-dark-secondary leading-[140%] sm:leading-120 font-normal text-[15px] sm:text-base'>
          For over three decades, Eggert Builders has been the partner Northwest Indiana families trust to build their most important investment. We're carpenters by trade — and that foundation of real craft shapes everything we do.
        </p>

        <p className='text-[#0a0a0a] mt-4 cursor-pointer jost font-semibold text-[11px] sm:text-[12px] tracking-[25%] underline underline-offset-[#0A0A0A] leading-150 uppercase'>
          Learn More About Us
        </p>
      </div>
    </div>
  )
}

export default WhoWeAre;