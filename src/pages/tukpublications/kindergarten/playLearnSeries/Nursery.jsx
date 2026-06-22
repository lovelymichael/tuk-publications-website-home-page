import React from "react";
import Layout from "../../../../components/Layout";
import FlipBook from "../../../../components/FlipBook"
import HeroBanner from "../../../../components/HeroBanner";
import FeatureSection from "../../../../components/FeaturesSection";


const Nursery = () =>{
    return(
        <Layout>
        <HeroBanner title="Nursery"/>
        <FlipBook/>
        <FeatureSection/>
        </Layout>
    )
}

export default Nursery;