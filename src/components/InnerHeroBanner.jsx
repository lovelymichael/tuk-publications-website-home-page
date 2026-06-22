import React from "react";
import bannerBg from "../assets/images/book-banner-main.jpg";

const InnerHeroBanner = ({title}) =>{
    return(
        <section className="h-[500] py-[100px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
            backgroundImage:`url(${bannerBg})`
        }}>

            <div className="text-center text-white">
                <h1 className="text-4xl font-bold bg-white text-[#178ccf] px-8 pt-1 pb-2 rounded-[70px] border-b-[5px]
                border-[#78c5ef] inline-block">
                    {title}
                </h1>
            </div>

        </section>
    )
}

export default InnerHeroBanner;