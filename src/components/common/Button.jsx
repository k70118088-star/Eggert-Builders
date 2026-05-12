"use client";
import React from "react";

const variants = {
  primary:
    "text-white border hover:bg-white hover:text-[#0A0A0A] border-white h-[46px] w-[150px]",

  secondary:
    "bg-white text-[#0A0A0A] hover:bg-transparent hover:text-white hover:border-white border border-transparent h-[46px] w-[235px]",

  outline:
    "border border-[#0A0A0A] text-[#0A0A0A] w-full h-[46px] hover:bg-black hover:text-white hover:border-gray-500",

  danger:
    "border h-[46px] w-[165px] bg-[#0A0A0A] text-white hover:bg-transparent hover:text-black" ,
};

export default function Button({
  text,
  variant = "primary",
  className,
  type = "button",
  onclick
}) {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`jost font-medium cursor-pointer text-[12px] leading-150 tracking-20 uppercase transition-all duration-800 flex items-center justify-center ${variants[variant]} ${className}`}>
      {text}
    </button>
  );
}