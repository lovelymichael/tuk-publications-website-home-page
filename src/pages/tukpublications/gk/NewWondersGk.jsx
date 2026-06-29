import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { newwonderGkFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const newwondergkPages = loadImages(
  import.meta.glob("/src/assets/images/new-wonders-of-gk/*.png", {
    eager: true,
  }),
);

const NewWondersGk = () => {
  return (
    <Layout>
      <HeroBanner title="New Wonders of GK" />
      <FlipBook pages={newwondergkPages}/>
      <FeatureSection
        heading="New Wonders of GK"
        features={newwonderGkFeatures}
      />
    </Layout>
  );
};

export default NewWondersGk;
