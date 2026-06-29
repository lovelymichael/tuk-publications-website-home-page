import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { computerBuddyFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const computerBuddyPages = loadImages(
  import.meta.glob("/src/assets/images/computer-buddy/*.png", {
    eager: true,
  }),
);

const ComputerBuddy = () => {
  return (
    <Layout>
      <HeroBanner title="Computer Buddy" />
      <FlipBook pages={computerBuddyPages}/>
      <FeatureSection
        heading="Computer Buddy Series Features"
        features={computerBuddyFeatures}
      />
    </Layout>
  );
};

export default ComputerBuddy;
