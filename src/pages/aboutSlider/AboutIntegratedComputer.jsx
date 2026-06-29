import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutIntegratedComputer =  () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Integrated Computer"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.integratedComputer}/>
        </Layout>
    )
}

export default AboutIntegratedComputer;