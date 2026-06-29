import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { sampooranaHindiVyakaranFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const sampooranaHindiVyakaranPages = loadImages(
  import.meta.glob("/src/assets/images/sampooran-hindi-vyakaran/*.png", {
    eager: true,
  }),
);

const SampooranaHindiVyakaran = () => {
  return (
    <Layout>
      <HeroBanner title="Sampoorana Hindi Vyakaran" />
      <FlipBook pages={sampooranaHindiVyakaranPages} />
      <FeatureSection
        heading="सम्पूर्ण हिन्दी व्याकरण"
        features={sampooranaHindiVyakaranFeatures}
        isHindi={true}
      />
    </Layout>
  );
};

export default SampooranaHindiVyakaran;
