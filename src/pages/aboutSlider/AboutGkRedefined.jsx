import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutGkRedefined = () =>{
    return(
       <Layout>
            <AboutInnerHeroBanner title="GK Redefined"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.gkRedefined}/>
        </Layout>
    )
}
export default AboutGkRedefined;