import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { universalGkFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const universalgkPages = loadImages(
  import.meta.glob("/src/assets/images/universal-gk/*.png", {
    eager: true,
  }),
);

const UniversalGk = () => {
  return (
    <Layout>
      <HeroBanner title="Universal GK" />
      <FlipBook pages={universalgkPages}/>
      <FeatureSection
        heading="Universal GK Series Features"
        features={universalGkFeatures}
      />
    </Layout>
  );
};

export default UniversalGk;
