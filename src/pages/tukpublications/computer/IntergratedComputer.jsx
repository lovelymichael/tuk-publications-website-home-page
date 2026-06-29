import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { integratedComputerFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const intergratedComputerPages = loadImages(
  import.meta.glob("/src/assets/images/integrated-computer/*.png", {
    eager: true,
  }),
);

const IntergratedComputer = () => {
  return (
    <Layout>
      <HeroBanner title="Intergrated Computer" />
      <FlipBook pages={intergratedComputerPages}/>
      <FeatureSection
        heading="Intergrated Computer Series Features"
        features={integratedComputerFeatures}
      />
    </Layout>
  );
};

export default IntergratedComputer;
