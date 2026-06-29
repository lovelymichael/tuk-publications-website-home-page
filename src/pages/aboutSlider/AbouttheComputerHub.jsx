import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AbouttheComputerHub = () =>{
   return(
    <Layout>
            <AboutInnerHeroBanner title="Computer Hub"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.computerHub}/>
        </Layout>
   )
}
export default AbouttheComputerHub;