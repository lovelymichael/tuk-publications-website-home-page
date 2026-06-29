import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { revisedUniversalGkFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const universalgkPages = loadImages(
  import.meta.glob("/src/assets/images/revised-universal-gk/*.png", {
    eager: true,
  }),
);

const RevisedUniversalGk = () => {
  return (
    <Layout>
      <HeroBanner title="Revised Universal GK " />
      <FlipBook pages={universalgkPages}/>
      <FeatureSection
        heading="Revised Universal GK Series Features"
        features={revisedUniversalGkFeatures}
      />
    </Layout>
  );
};

export default RevisedUniversalGk;
