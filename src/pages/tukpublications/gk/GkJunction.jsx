import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { gkJunctionFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const gkJunctionPages = loadImages(
  import.meta.glob("/src/assets/images/gk-junction/*.png", {
    eager: true,
  }),
);

const GkJunction = () => {
  return (
    <Layout>
      <HeroBanner title="GK Junction" />
      <FlipBook pages={gkJunctionPages}/>
      <FeatureSection
        heading="GK Junction Series Features"
        features={gkJunctionFeatures}
      />
    </Layout>
  );
};

export default GkJunction;
