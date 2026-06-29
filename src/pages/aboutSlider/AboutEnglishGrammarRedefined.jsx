import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutEnglishGrammarRedefined = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="English Grammer Redefined"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.englishGrammerRedefined}/>
        </Layout>
    )
}
export default AboutEnglishGrammarRedefined;