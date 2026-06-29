import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";
const AboutAdvancedEnglishReader = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Advanced English Reader"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.advancedEnglishReader}/>
        </Layout>
    )
}
export default AboutAdvancedEnglishReader;