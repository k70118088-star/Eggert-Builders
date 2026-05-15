"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useEffect, useState } from "react";
import { nav } from "@/utils/helper";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // NAVBAR BG ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // DISABLE BODY SCROLL WHEN MENU OPEN
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed z-50 w-full py-4.25 transition-all duration-300 ${
        scrolled ? "bg-black/55 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between max-w-328 mx-auto w-full min-[1350px]:px-0 px-4">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3.25">
          <Link href="#">
          <Image
            src={"/assets/images/webp/logo-img.webp"}
            alt="logo"
            height={38}
            width={219}
            className="w-[160px] md:w-[190px] lg:w-auto"
          />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden items-center lg:flex">
          <ul className="flex items-center gap-8">
            {nav.map((item,index) => (
                <li key={index}>
                  <Link
                    href={item.herf}
                    className="text-[12px] font-medium leading-150 jost tracking-20 text-white transition hover:text-[#53a7ff]">
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-4 lg:flex">
          <p className="hidden text-[12px] font-medium leading-150 jost tracking-20 text-white xl:block">
            (219) 365-6931
          </p>

          <Button text={"GET A QUOTE"} />
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex items-center gap-4 lg:hidden">
           <div className="hidden sm:block">
          <Button text={"GET A QUOTE"} />
         </div>
        <button aria-label="menu button" onClick={() => setMenuOpen(true)} className="flex flex-col gap-1.5">
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
        </button>
        </div>
      </nav>
      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-all duration-500 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      ></div>
      {/* MOBILE SIDEBAR MENU */}
      <div
        className={`fixed top-0 right-0 z-50 flex h-screen w-[300px] flex-col bg-black p-8 transition-all duration-500 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* TOP */}
        <div className="mb-14 flex items-center justify-between">
          {/* CLOSE BUTTON */}
          <button aria-label="menu button" onClick={() => setMenuOpen(false)} className="text-4xl leading-none text-white">
            ×
          </button>
        </div>
        {/* MENU ITEMS */}
        <ul className="flex flex-col gap-8">
          {["ABOUT", "SERVICES", "PORTFOLIO", "PROCESS", "CONTACT"].map(
            (item) => (
              <li key={item}>
                <Link
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-[14px] font-medium uppercase tracking-[3px] text-white transition hover:text-[#53a7ff]">
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
        {/* BOTTOM */}
        <div className="mt-auto">
          <p className="mb-6 text-[13px] text-white">
            (219) 365-6931
          </p>
          <Button text={"GET A QUOTE"} className="w-full" />
        </div>
      </div>
    </header>
  );
}