import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutAdvancedMaths = () => {
  return (
    <Layout>
            <AboutInnerHeroBanner title="Advanced Maths"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.advancedMaths}/>
        </Layout>
  );
};

export default AboutAdvancedMaths;