import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutComputerBuddy = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Computer Buddy"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.computerBuddy}/>
        </Layout>
    )
}
export default AboutComputerBuddy;