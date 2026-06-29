import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { computerCompanionFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const computerCompanionPages = loadImages(
  import.meta.glob("/src/assets/images/computer-companion/*.png", {
    eager: true,
  }),
);

const ComputerCompanion = () => {
  return (
    <Layout>
      <HeroBanner title="Computer Companion" />
      <FlipBook pages={computerCompanionPages}/>
      <FeatureSection
        heading="Computer Companion Series Features"
        features={computerCompanionFeatures}
      />
    </Layout>
  );
};

export default ComputerCompanion;
