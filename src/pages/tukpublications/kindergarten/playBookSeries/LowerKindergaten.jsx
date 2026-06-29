import React from "react";
import Layout from "../../../../components/Layout";
import HeroBanner from "../../../../components/HeroBanner";
import FlipBook from "../../../../components/FlipBook";
import FeatureSection from "../../../../components/FeaturesSection";
import { loadImages } from "../../../../utils/loadImages";
import { lkgFeatures } from "../../../../data/seriesFeatures";

const lkgPages = loadImages(
    import.meta.glob(
        "../../../../assets/images/kindergartner/play-book-series/lkg/*.png",
        {eager:true}
    )
);

const LowerKindergarten = () =>{
    return(
       <Layout>
        <HeroBanner title="Lower Kindergarten"/>
        <FlipBook pages={lkgPages}/>
        <FeatureSection
        heading="Lower Kindergarten Series Features"
        features={lkgFeatures}
        />
        </Layout>
    )
}

export default LowerKindergarten;