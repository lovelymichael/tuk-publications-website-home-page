import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { integratedGkFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const gkREdefinedPages = loadImages(
  import.meta.glob("/src/assets/images/gk-Redefined/*.png", {
    eager: true,
  }),
);

const GKRedefined = () => {
  return (
    <Layout>
      <HeroBanner title="GK Redefined" />
      <FlipBook pages={gkREdefinedPages}/>
      <FeatureSection
        heading="GK Redefined Series Features"
        features={integratedGkFeatures}
      />
    </Layout>
  );
};

export default GKRedefined;
