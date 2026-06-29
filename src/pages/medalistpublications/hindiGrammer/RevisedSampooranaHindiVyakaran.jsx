import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { revisedSampooranaHindiVyakaranFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const revisedSampooranaHindiVyakaranPages = loadImages(
  import.meta.glob("/src/assets/images/revised-sampooran-hindi-vyakaran/*.png", {
    eager: true,
  }),
);

const RevisedSampooranaHindiVyakaran = () => {
  return (
    <Layout>
      <HeroBanner title="Revised Sampoorana Hindi Vyakaran" />
      <FlipBook pages={revisedSampooranaHindiVyakaranPages} />
      <FeatureSection
        heading="नवीनतम संशोधित संस्करण सम्पूर्ण हिन्दी व्याकरण : प्रमुख विशेषताएँ"
        features={revisedSampooranaHindiVyakaranFeatures}
        isHindi={true}
      />
    </Layout>
  );
};

export default RevisedSampooranaHindiVyakaran;
