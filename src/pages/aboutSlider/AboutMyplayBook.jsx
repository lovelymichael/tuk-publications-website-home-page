import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";


const AboutMyplayBook = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="Play and Learn"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.myplayBook}/>
        </Layout>
    )
}
export default AboutMyplayBook;