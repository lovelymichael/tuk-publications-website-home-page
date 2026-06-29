import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutAi = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Artificial Intelligence"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.ai}/>
        </Layout>
    )
}
export default AboutAi;