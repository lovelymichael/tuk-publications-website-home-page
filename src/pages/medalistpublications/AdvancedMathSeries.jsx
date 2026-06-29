import React from "react";
import Layout from "../../components/Layout";
import HeroBanner from "../../components/HeroBanner";
import FlipBook from "../../components/FlipBook";
import { loadImages } from "../../utils/loadImages";
import { advancedMathsFeatures } from "../../data/seriesFeatures";
import FeatureSection from "../../components/FeaturesSection";

const advancedMathsPages = loadImages(
  import.meta.glob("/src/assets/images/advanced-maths/*.png", {
    eager: true,
  }),
);

const AdvancedMathSeries = () => {
  return (
    <Layout>
      <HeroBanner title="Advanced Maths" />
      <FlipBook pages={advancedMathsPages}/>
      <FeatureSection
        heading="Advanced Maths Series Features"
        features={advancedMathsFeatures}
      />
    </Layout>
  );
};

export default AdvancedMathSeries;
