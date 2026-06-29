import React from "react";

const AboutSeriesIntro = ({ image, content }) => {
  return (
    <section className="bg-[#fff] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <img src={image} alt="" />
        </div>

        <div className="flex-1">
          <p
            className="mb-[25px] text-[17px] leading-[1.8] text-[#333333] text-left font-extralight"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSeriesIntro;
