import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { progressiveComputerFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const progressiveComputerPages = loadImages(
  import.meta.glob("/src/assets/images/advanced-computer/*.png", {
    eager: true,
  }),
);

const ProgressiveComputer = () => {
  return (
    <Layout>
      <HeroBanner title="Progressive Computer" />
      <FlipBook pages={progressiveComputerPages}/>
      <FeatureSection
        heading="Progressive Computer Series Features"
        features={progressiveComputerFeatures}
      />
    </Layout>
  );
};

export default ProgressiveComputer;
