import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutAdvancedScience = () =>{
    return(
       <Layout>
            <AboutInnerHeroBanner title="Advanced Science"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.advancedScience}/>
        </Layout>
    )
}
export default AboutAdvancedScience;