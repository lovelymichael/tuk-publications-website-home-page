import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutAdvancedGk = () => {
  return (
    <Layout>
            <AboutInnerHeroBanner title="Advanced GK"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.advancedGk}/>
        </Layout>
  );
};

export default AboutAdvancedGk;