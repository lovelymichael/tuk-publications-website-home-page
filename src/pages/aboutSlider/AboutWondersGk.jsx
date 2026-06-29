import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutWondersGk = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Wonders of GK"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.wondersGk}/>
        </Layout>
    )
}
export default AboutWondersGk;