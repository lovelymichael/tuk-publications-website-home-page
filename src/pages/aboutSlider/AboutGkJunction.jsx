import React from "react";
import Layout from "../../components/Layout";
import AboutInnerHeroBanner from "../../components/AboutInnerHeroBanner";
import AboutSeriesIntro from "../../components/AboutSeriesIntro";
import { aboutSeriesIntroData } from "../../data/aboutSeriesIntroData";

const AboutGkJunction = () =>{
    return(
        <Layout>
            <AboutInnerHeroBanner title="GK Junction"/>
            <AboutSeriesIntro {...aboutSeriesIntroData.gkJunction}/>
        </Layout>
    )
}

export default AboutGkJunction;