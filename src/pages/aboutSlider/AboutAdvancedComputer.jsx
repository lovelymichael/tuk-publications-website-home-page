import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutAdvancedComputer = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Advanced Computer"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.advancedComputer}/>
        </Layout>
    )
}
export default AboutAdvancedComputer;