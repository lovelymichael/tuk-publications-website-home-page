import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { advancedGkFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const advancedgkPages = loadImages(
  import.meta.glob("/src/assets/images/advanced-gk/*.png", {
    eager: true,
  }),
);

const AdvancedGk = () => {
  return (
    <Layout>
      <HeroBanner title="Advanced GK" />
      <FlipBook pages={advancedgkPages}/>
      <FeatureSection
        heading="Advanced GK Series Features"
        features={advancedGkFeatures}
      />
    </Layout>
  );
};

export default AdvancedGk;
