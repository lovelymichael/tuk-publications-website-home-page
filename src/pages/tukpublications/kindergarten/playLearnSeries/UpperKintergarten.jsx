import React from "react";
import Layout from "../../../../components/Layout";
import HeroBanner from "../../../../components/HeroBanner";
import FlipBook from "../../../../components/FlipBook";
import FeatureSection from "../../../../components/FeaturesSection";
import { loadImages } from "../../../../utils/loadImages";
import { ukgFeatures } from "../../../../data/seriesFeatures";

const ukgPages = loadImages(
    import.meta.glob(
        "../../../../assets/images/kindergartner/play-learn-series/ukg/*.png",
        {eager:true}
    )
);

const UpperKindergarten = () =>{
    return(
       <Layout>
        <HeroBanner title="Upper Kindergarten"/>
        <FlipBook pages={ukgPages}/>
        <FeatureSection
        heading="Upper Kindergarten Series Features"
        features={ukgFeatures}
        />
        </Layout>
    )
}

export default UpperKindergarten;