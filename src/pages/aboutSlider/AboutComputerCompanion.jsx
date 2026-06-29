import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutComputerCompanion = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Computer Companion"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.computerCompanion}/>
        </Layout>
    )
}
export default AboutComputerCompanion;