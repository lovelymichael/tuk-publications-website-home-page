import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutSamastHindiVyakaran = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Samast Hindi Vyakaran"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.samastHindiVyakaran}/>
        </Layout>
    )
}
export default AboutSamastHindiVyakaran;