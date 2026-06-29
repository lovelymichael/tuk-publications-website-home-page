import React from "react";
import Layout from "../../components/Layout";
import HeroBanner from "../../components/HeroBanner";
import FlipBook from "../../components/FlipBook";
import { loadImages } from "../../utils/loadImages";
import { advancedEnglishReaderFeatures } from "../../data/seriesFeatures";
import FeatureSection from "../../components/FeaturesSection";

const advancedEnglishReaderPages = loadImages(
  import.meta.glob("/src/assets/images/advanced-english-reader/*.png", {
    eager: true,
  }),
);

const AdvancedEnglishReaderSeries = () => {
  return (
    <Layout>
      <HeroBanner title="Advanced English Reader" />
      <FlipBook pages={advancedEnglishReaderPages}/>
      <FeatureSection
        heading="Advanced English Reader Series Features"
        features={advancedEnglishReaderFeatures}
      />
    </Layout>
  );
};

export default AdvancedEnglishReaderSeries;
