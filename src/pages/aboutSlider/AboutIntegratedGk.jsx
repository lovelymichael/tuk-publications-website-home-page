import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutIntegratedGk = () =>{
     return(
        <Layout>
            <AboutInnerHeroBanner title="Integrated GK"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.integratedGk}/>
        </Layout>
    )
}

export default AboutIntegratedGk;