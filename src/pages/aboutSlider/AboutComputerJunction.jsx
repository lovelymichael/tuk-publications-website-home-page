import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutComputerJunction =() =>{
    return(
       <Layout>
            <AboutInnerHeroBanner title="Computer Juction"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.computerJuction}/>
        </Layout>
    )
}
export default AboutComputerJunction;