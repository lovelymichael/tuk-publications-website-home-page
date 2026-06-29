import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { wonderGkFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const wondergkPages = loadImages(
  import.meta.glob("/src/assets/images/wonders-gk/*.png", {
    eager: true,
  }),
);

const WondersGk = () => {
  return (
    <Layout>
      <HeroBanner title="Wonders of GK" />
      <FlipBook pages={wondergkPages}/>
      <FeatureSection
        heading="Wonders of GK Series Features"
        features={wonderGkFeatures}
      />
    </Layout>
  );
};

export default WondersGk;
