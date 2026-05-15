import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-dark-secondary py-12 sm:py-16 lg:py-20 px-4 sm:px-6 min-[1340px]:px-0">
      
      <div className="max-w-328 mx-auto w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-6">
        
        {/* LOGO */}
        <Link href="#">
        <Image
          src={"/assets/images/webp/logo-img.webp"}
          alt="logo-img"
          height={"40"}
          width={"230"}
          className="object-cover w-45 sm:w-57.5 h-auto"/>
        </Link>

        {/* NAV LINKS */}
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-8">
            {["ABOUT", "SERVICES", "PORTFOLIO", "PROCESS", "CONTACT"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[11px] sm:text-[12px] font-medium leading-150 jost tracking-20 text-white transition hover:text-[#FFFFFF]/40"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* COPYRIGHT */}
        <div className="max-w-full lg:max-w-49.5 w-full text-center lg:text-left">
          <p className="text-white/60 jost text-[14px] sm:text-base leading-150 font-normal">
            © {new Date().getFullYear()} Eggert Builders, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;