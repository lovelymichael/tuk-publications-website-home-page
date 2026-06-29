import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutSampooranHindiVyakaran = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Sampoorana Hindi Vyakaran"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.sampooranHindiVyakaran}/>
        </Layout>
    )
}
export default AboutSampooranHindiVyakaran;