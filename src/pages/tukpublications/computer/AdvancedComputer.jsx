import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { advancedComputerFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const advancedComputerPages = loadImages(
  import.meta.glob("/src/assets/images/advanced-computer/*.png", {
    eager: true,
  }),
);

const AdvancedComputer = () => {
  return (
    <Layout>
      <HeroBanner title="Advanced Computer" />
      <FlipBook pages={advancedComputerPages}/>
      <FeatureSection
        heading="Advanced Computer Series Features"
        features={advancedComputerFeatures}
      />
    </Layout>
  );
};

export default AdvancedComputer;
