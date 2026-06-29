import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";
const AboutAdvancedEnglishGrammar = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Advanced English Grammar"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.advancedEnglishGrammar}/>
        </Layout>
    )
}
export default AboutAdvancedEnglishGrammar;