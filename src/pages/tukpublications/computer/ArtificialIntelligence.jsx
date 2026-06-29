import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { artificialIntelligenceFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const artificialIntelligencePages = loadImages(
  import.meta.glob("/src/assets/images/artificial-intelligence/*.png", {
    eager: true,
  }),
);

const ArtificialIntelligence = () => {
  return (
    <Layout>
      <HeroBanner title="Artificial Intelligence" />
      <FlipBook pages={artificialIntelligencePages}/>
      <FeatureSection
        heading="Artificial Intelligence Series Features"
        features={artificialIntelligenceFeatures}
      />
    </Layout>
  );
};

export default ArtificialIntelligence;
