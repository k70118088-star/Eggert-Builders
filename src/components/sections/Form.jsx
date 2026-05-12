"use client";

import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Form() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    helpWith: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState(false);

  const submit = () => {
    setErrors(true);

    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.helpWith &&
      formData.projectDescription
    ) {
      console.log(formData);
    }
  };

  return (
    <div className="border border-gray-light bg-offwhite py-16 sm:py-24 lg:py-30 overflow-hidden">
      
      <div className="max-w-216.5 mx-auto px-4 sm:px-5">

        {/* HEADING */}
        <h2
          data-aos="fade-up"
          className="pb-10 sm:pb-15 text-center cormorant text-[38px] sm:text-[52px] lg:text-custom-6xl font-normal leading-120 tracking-normal text-dark-primary"
        >
          Let's build something <span className="italic">together.</span>
        </h2>

        {/* FORM */}
        <div className="flex w-full flex-col gap-6">

          {/* FIRST + LAST NAME */}
          <div className="flex w-full flex-col gap-6 lg:flex-row">

            {/* FIRST NAME */}
            <div
              data-aos="fade-right"
              className="flex w-full lg:min-w-[425px] flex-col gap-3 border-b border-b-gray-light pb-3"
            >
              <label className="font-jost text-xs font-medium uppercase leading-150 tracking-20 text-dark-primary">
                First Name
              </label>

              <Input
                type="text"
                placeholder="Enter your first name"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full text-gray-dark placeholder:font-montserrat placeholder:text-sm placeholder:font-normal placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none"
              />

              {errors && formData.firstName === "" && (
                <p className="text-sm text-red-500">
                  First Name is required
                </p>
              )}
            </div>

            {/* LAST NAME */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="flex w-full lg:min-w-[425px] flex-col gap-3 border-b border-b-gray-light pb-3"
            >
              <label className="font-jost text-xs font-medium uppercase leading-150 tracking-20 text-dark-primary">
                Last Name
              </label>

              <Input
                type="text"
                placeholder="Enter your last name"
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full text-gray-dark placeholder:font-montserrat placeholder:text-sm placeholder:font-normal placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none"
              />

              {errors && formData.lastName === "" && (
                <p className="text-sm text-red-500">
                  Last Name is required
                </p>
              )}
            </div>
          </div>

          {/* EMAIL */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-col gap-3 border-b border-b-gray-light pb-3"
          >
            <label className="font-jost text-xs font-medium uppercase leading-150 tracking-20 text-dark-primary">
              Email Address
            </label>

            <Input
              type="text"
              placeholder="Enter your email address"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full text-gray-dark placeholder:font-montserrat placeholder:text-sm placeholder:font-normal placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none"
            />

            {errors && formData.email === "" && (
              <p className="text-sm text-red-500">
                Email Address is required
              </p>
            )}

            {errors &&
              formData.email !== "" &&
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                <p className="text-sm text-red-500">
                  Enter a valid email address
                </p>
              )}
          </div>

          {/* PHONE */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col gap-3 border-b border-b-gray-light pb-3"
          >
            <label className="font-jost text-xs font-medium uppercase leading-150 tracking-20 text-dark-primary">
              Phone Number
            </label>

            <Input
              type="text"
              placeholder="Enter your phone number"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full text-gray-dark placeholder:font-montserrat placeholder:text-sm placeholder:font-normal placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none"
            />

            {errors && formData.phone === "" && (
              <p className="text-sm text-red-500">
                Phone Number is required
              </p>
            )}

            {errors &&
              formData.phone !== "" &&
              formData.phone.length < 10 && (
                <p className="text-sm text-red-500">
                  Phone Number must be at least 10 characters
                </p>
              )}
          </div>

          {/* HELP WITH */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col gap-3 border-b border-b-gray-light pb-3"
          >
            <label className="font-jost text-xs font-medium uppercase leading-150 tracking-20 text-dark-primary">
              What can we help with
            </label>

            <Input
              type="text"
              placeholder="Tell us what you need help with"
              onChange={(e) =>
                setFormData({ ...formData, helpWith: e.target.value })
              }
              className="w-full text-gray-dark placeholder:font-montserrat placeholder:text-sm placeholder:font-normal placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none"
            />

            {errors && formData.helpWith === "" && (
              <p className="text-sm text-red-500">
                This field is required
              </p>
            )}
          </div>

          {/* PROJECT DESCRIPTION */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col gap-3 border-b border-b-gray-light pb-3"
          >
            <label className="font-jost text-xs font-medium uppercase leading-150 tracking-20 text-dark-primary">
              Tell Us About Your Project
            </label>

            <Input
              type="text"
              placeholder="Briefly describe your project"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  projectDescription: e.target.value,
                })
              }
              className="w-full text-gray-dark placeholder:font-montserrat placeholder:text-sm placeholder:font-normal placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none"
            />

            {errors && formData.projectDescription === "" && (
              <p className="text-sm text-red-500">
                Project description is required
              </p>
            )}
          </div>
        </div>

        {/* BUTTON */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="mt-10 sm:mt-15 flex items-center justify-center"
        >
          <Button
            text={"send message"}
            variant="danger"
            onclick={submit}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;