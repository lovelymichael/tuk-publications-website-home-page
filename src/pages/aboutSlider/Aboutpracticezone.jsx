import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutPracticeZone = () =>{
    return(
       <Layout>
            <AboutInnerHeroBanner title="Practice Zone"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.parcticeZone}/>
        </Layout>
    )
}
export default AboutPracticeZone;