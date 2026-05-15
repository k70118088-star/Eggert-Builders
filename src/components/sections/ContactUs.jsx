"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="contactus" className="mx-auto w-full max-w-360 overflow-hidden bg-dark-secondary">
      <div className="flex flex-col lg:flex-row">
        {/* LEFT SIDE */}
        <div
          data-aos="fade-right"
          className="flex w-full max-w-full lg:max-w-138.75 items-center py-16 sm:py-20 lg:py-0">
          <div className="mx-auto max-w-105.25 px-4 sm:px-5">
            {/* SMALL TEXT */}
            <p className="mb-4 text-[10px] uppercase tracking-[4px] text-gray-500">
              GET IN TOUCH
            </p>
            {/* HEADING */}
            <h2 data-aos="fade-up" data-aos-delay="100"
              className="cormorant text-[42px] sm:text-[55px] md:text-[72px] leading-none text-white">
              Contact us
            </h2>
            {/* DESCRIPTION */}
            <p data-aos="fade-up" data-aos-delay="200"
              className="mt-3 max-w-[320px] text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-gray-400">
              Ready to get started or just have questions? Reach out — Scott
              will respond to you personally.
            </p>
            {/* LINE */}
            <div className="my-8 h-1px w-full bg-[#1f1f1f]"></div>
            {/* PHONE */}
            <div data-aos="fade-up" data-aos-delay="300" className="mb-6">
              <p className="mb-1 jost text-[11px] sm:text-[12px] font-medium uppercase leading-150 tracking-20 text-white/40">
                PHONE
              </p>
              <a href="tel:+12193656931" className="jost text-[15px] sm:text-base font-normal leading-150 text-white transition hover:text-gray-300">
                (219) 365-6931
              </a>
            </div>
            {/* EMAIL */}
            <div data-aos="fade-up" data-aos-delay="400" className="mb-6">
              <p className="mb-1 jost text-[11px] sm:text-[12px] font-medium uppercase leading-150 tracking-20 text-white/40">
                EMAIL
              </p>
              <a href="mailto:scott.eggert@att.net" className="jost break-all text-[15px] sm:text-base font-normal leading-150 text-white transition hover:text-gray-300">
                scott.eggert@att.net
              </a>
            </div>
            {/* OFFICE */}
            <div data-aos="fade-up"  data-aos-delay="500" className="mb-6">
              <p className="mb-1 jost text-[11px] sm:text-[12px] font-medium uppercase leading-150 tracking-20 text-white/40">
                OFFICE
              </p>
              <p className="max-w-62.5 jost text-[15px] sm:text-base font-normal leading-150 text-white">
                9695 Julia Dr, Saint John, IN 46373
              </p>
            </div>
            {/* SERVICE AREA */}
            <div data-aos="fade-up" data-aos-delay="600">
              <p className="mb-1 jost text-[11px] sm:text-[12px] font-medium uppercase leading-150 tracking-20 text-white/40">
                SERVICE AREA
              </p>
              <p className="jost text-[15px] sm:text-base font-normal leading-150 text-white">
                Northwest Indiana
              </p>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE MAP */}
        <div data-aos="fade-left" data-aos-delay="300" className="relative min-h-37.5 sm:min-h-125 lg:min-h-180.25 h-full w-full max-w-full lg:max-w-221.25">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.8244397190256!2d-87.50763272411838!3d41.443030871292855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811e2e49f80d20b%3A0xfc18d18232555ea6!2s9695%20Julia%20Dr%2C%20St%20John%2C%20IN%2046373%2C%20USA!5e0!3m2!1sen!2sin!4v1778660923060!5m2!1sen!2sin"
            width="100%"
            height="100%"
            title="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;