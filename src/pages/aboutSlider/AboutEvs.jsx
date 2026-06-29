import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutEvs = () => {
    return(
        <Layout>
            <AboutInnerHeroBanner title="Environmental Studies"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.evs}/>
        </Layout>
    )
}
export default AboutEvs;