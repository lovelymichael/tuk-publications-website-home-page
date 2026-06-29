import React from "react";
import Layout from "../../../../components/Layout";
import FlipBook from "../../../../components/FlipBook"
import HeroBanner from "../../../../components/HeroBanner";
import FeatureSection from "../../../../components/FeaturesSection";
import { loadImages } from "../../../../utils/loadImages";
import {nurseryFeatures} from "../../../../data/seriesFeatures";

const nurseryPages = loadImages(
  import.meta.glob(
    "../../../../assets/images/kindergartner/play-book-series/nursery/*.png",
    { eager: true }
  )
);

const Nursery = () =>{
    return(
        <Layout>
        <HeroBanner title="Nursery"/>
        <FlipBook pages={nurseryPages}/>
        <FeatureSection
            heading="Nursery Series Features"
             features={nurseryFeatures}
        />
        </Layout>
    )
}

export default Nursery;