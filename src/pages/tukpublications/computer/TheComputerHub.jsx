import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { theComputerHubFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const theComputerHubPages = loadImages(
  import.meta.glob("/src/assets/images/computer-hub/*.png", {
    eager: true,
  }),
);

const TheComputerHub = () => {
  return (
    <Layout>
      <HeroBanner title="The Computer Hub" />
      <FlipBook pages={theComputerHubPages}/>
      <FeatureSection
        heading="The Computer Hub Series Features"
        features={theComputerHubFeatures}
      />
    </Layout>
  );
};

export default TheComputerHub;
