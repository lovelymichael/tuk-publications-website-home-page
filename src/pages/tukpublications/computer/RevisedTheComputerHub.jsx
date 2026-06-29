import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { revisedTheComputerHubFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const revisedTheComputerHubPages = loadImages(
  import.meta.glob("/src/assets/images/revised-the-computer-hub/*.png", {
    eager: true,
  }),
);

const RevisedTheComputerHub = () => {
  return (
    <Layout>
      <HeroBanner title="Revised The Computer Hub" />
      <FlipBook pages={revisedTheComputerHubPages}/>
      <FeatureSection
        heading="Revised The Computer Hub Series Features"
        features={revisedTheComputerHubFeatures}
      />
    </Layout>
  );
};

export default RevisedTheComputerHub;
