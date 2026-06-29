import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutProgressiveGk = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Progressive GK"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.progressiveGk}/>
        </Layout>
    )
}
export default AboutProgressiveGk;