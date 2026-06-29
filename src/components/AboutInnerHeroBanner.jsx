import React from "react";
import aboutBannerBg from "../assets/images/about-inner-banner.png";

const AboutInnerHeroBanner = ({title}) =>{
    return(
        <section className="h-[500] py-[100px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
            backgroundImage:`url(${aboutBannerBg})`
        }}>

            <div className="text-center text-white">
                <h1 className="text-4xl font-bold uppercase text-[#fff] px-8 pt-1 pb-2 inline-block">
                    {title}
                </h1>
            </div>

        </section>
    )
}

export default AboutInnerHeroBanner;