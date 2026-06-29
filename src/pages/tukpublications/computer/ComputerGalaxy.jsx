import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { computerGalaxyFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const computerGalaxyPages = loadImages(
  import.meta.glob("/src/assets/images/computer-galaxy/*.png", {
    eager: true,
  })
);

const ComputerGalaxy = () => {
  return (
    <Layout>
      <HeroBanner title="Computer Galaxy" />
      <FlipBook pages={computerGalaxyPages} />
      <FeatureSection
        heading="Computer Galaxy Series Features"
        features={computerGalaxyFeatures}
      />
    </Layout>
  );
  
};

export default ComputerGalaxy;