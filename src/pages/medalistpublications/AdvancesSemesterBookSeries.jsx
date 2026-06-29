import React from "react";
import Layout from "../../components/Layout";
import HeroBanner from "../../components/HeroBanner";
import FlipBook from "../../components/FlipBook";
import { loadImages } from "../../utils/loadImages";
import { advancedsemesterFeatures } from "../../data/seriesFeatures";
import FeatureSection from "../../components/FeaturesSection";

const advancedSemesterBookPages = loadImages(
  import.meta.glob("/src/assets/images/advanced-semester-books/*.png", {
    eager: true,
  }),
);

const AdvancesSemesterBookSeries = () => {
  return (
    <Layout>
      <HeroBanner title="Advanced Semester Book" />
      <FlipBook pages={advancedSemesterBookPages}/>
      <FeatureSection
        heading="Advanced Semester Book Series Features"
        features={advancedsemesterFeatures}
      />
    </Layout>
  );
};

export default AdvancesSemesterBookSeries;
