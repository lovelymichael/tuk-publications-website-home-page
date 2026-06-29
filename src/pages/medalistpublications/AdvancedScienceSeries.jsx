import React from "react";
import Layout from "../../components/Layout";
import HeroBanner from "../../components/HeroBanner";
import FlipBook from "../../components/FlipBook";
import { loadImages } from "../../utils/loadImages";
import { advancedscienceFeatures } from "../../data/seriesFeatures";
import FeatureSection from "../../components/FeaturesSection";

const advancedSciencePages = loadImages(
  import.meta.glob("/src/assets/images/advanced-science/*.png", {
    eager: true,
  }),
);

const AdvancedScienceSeries = () => {
  return (
    <Layout>
      <HeroBanner title="Advanced Science" />
      <FlipBook pages={advancedSciencePages}/>
      <FeatureSection
        heading="Advanced Science Series Features"
        features={advancedscienceFeatures}
      />
    </Layout>
  );
};

export default AdvancedScienceSeries;
