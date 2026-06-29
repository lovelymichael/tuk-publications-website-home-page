import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutAdvancedSemesterBook = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Advanced Semester"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.advancedSemesterBook}/>
        </Layout>
    )
}
export default AboutAdvancedSemesterBook;