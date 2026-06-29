import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { progressiveGkFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const progressivegkPages = loadImages(
  import.meta.glob("/src/assets/images/progressive-gk/*.png", {
    eager: true,
  }),
);

const ProgressiveGk = () => {
  return (
    <Layout>
      <HeroBanner title="Progressive GK" />
      <FlipBook pages={progressivegkPages}/>
      <FeatureSection
        heading="Progressive GK Series Features"
        features={progressiveGkFeatures}
      />
    </Layout>
  );
};

export default ProgressiveGk;
