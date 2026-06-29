import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { samastHindiVyakaranFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const samastHindiVyakaranPages = loadImages(
  import.meta.glob("/src/assets/images/samast-hindi-vyakaran/*.png", {
    eager: true,
  }),
);

const SamastHindiVyakaran = () => {
  return (
    <Layout>
      <HeroBanner title="Samast Hindi Vyakaran" />
      <FlipBook pages={samastHindiVyakaranPages} />
      <FeatureSection
        heading="समस्त हिन्दी व्याकरण"
        features={samastHindiVyakaranFeatures}
        isHindi={true}
      />
    </Layout>
  );
};

export default SamastHindiVyakaran;
