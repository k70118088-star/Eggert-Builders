import About from "@/components/sections/About";
import ClientExperience from "@/components/sections/ClientExperience";
import ContactUs from "@/components/sections/ContactUs";
import Form from "@/components/sections/Form";
import Hero from "@/components/sections/Hero";
import HowWorks from "@/components/sections/HowWorks";
import OurService from "@/components/sections/OurService";
import OurWork from "@/components/sections/OurWork";
import Status from "@/components/sections/Status";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (

    <>
      <Hero />
      <Status />
      <WhoWeAre />
      <About />
      <OurService />
      <OurWork />
      <HowWorks />
      <ClientExperience />
      <ContactUs />
      <Form />
    </>

  );
}
