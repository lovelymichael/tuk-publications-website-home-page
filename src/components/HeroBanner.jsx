import React from "react";
import innerherobannerBg from "../assets/images/inner-hero-banner.png";

const HeroBanner = ({ title }) => {
  return (
    <section
      className="h-[240px] w-full py-[100px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${innerherobannerBg})`,
      }}
    >
      <div className="text-center text-white">
        <h1
          className="text-4xl font-bold bg-white text-[#178ccf] px-8 pt-1 pb-2 rounded-[70px] border-b-[5px]
          border-[#78c5ef] inline-block"
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeroBanner;