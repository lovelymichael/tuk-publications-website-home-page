import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { computerJunctionFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const computerJunctionPages = loadImages(
  import.meta.glob("/src/assets/images/computer-junction/*.png", {
    eager: true,
  })
);

const ComputerJunction = () => {
  return (
    <Layout>
      <HeroBanner title="Computer Junction" />
      <FlipBook pages={computerJunctionPages} />
      <FeatureSection
        heading="Computer Junction Series Features"
        features={computerJunctionFeatures}
      />
    </Layout>
  );
};

export default ComputerJunction;