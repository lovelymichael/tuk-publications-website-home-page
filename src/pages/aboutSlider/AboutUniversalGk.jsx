import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutUniversalGk = () =>{
    return(
    <Layout>
            <AboutInnerHeroBanner title="Universal GK"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.universalGk}/>
        </Layout>
)
}
export default AboutUniversalGk;