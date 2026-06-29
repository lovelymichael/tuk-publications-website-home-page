import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { revisedProgressiveGkFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const progressivegkPages = loadImages(
  import.meta.glob("/src/assets/images/revised-progressive-gk/*.png", {
    eager: true,
  }),
);

const RevisedProgressiveGk = () => {
  return (
    <Layout>
      <HeroBanner title="Revised Progressive GK " />
      <FlipBook pages={progressivegkPages}/>
      <FeatureSection
        heading="Revised progressive GK Series Features"
        features={revisedProgressiveGkFeatures}
      />
    </Layout>
  );
};

export default RevisedProgressiveGk;
