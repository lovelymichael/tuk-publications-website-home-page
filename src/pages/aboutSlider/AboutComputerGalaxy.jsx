import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutComputerGalaxy = () =>{
    return(
       <Layout>
            <AboutInnerHeroBanner title="Computer Galaxy"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.computerGalaxy}/>
        </Layout>
    )
}
export default AboutComputerGalaxy;