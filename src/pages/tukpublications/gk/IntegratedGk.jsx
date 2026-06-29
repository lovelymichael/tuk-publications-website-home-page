import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { integratedGkFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const integratedgkPages = loadImages(
  import.meta.glob("/src/assets/images/integrated-gk/*.png", {
    eager: true,
  }),
);

const IntegratedGk = () => {
  return (
    <Layout>
      <HeroBanner title="Integrated GK" />
      <FlipBook pages={integratedgkPages}/>
      <FeatureSection
        heading="Integrated GK Series Features"
        features={integratedGkFeatures}
      />
    </Layout>
  );
};

export default IntegratedGk;
