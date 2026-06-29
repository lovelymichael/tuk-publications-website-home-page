import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { progressiveEnglishGrammarFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const progressiveEnglishGrammerPages = loadImages(
  import.meta.glob("/src/assets/images/progressive-english-grammer/*.png", {
    eager: true,
  }),
);

const ProgressiveEnglishGrammer = () => {
  return (
    <Layout>
      <HeroBanner title="Progressive English Grammer" />
      <FlipBook pages={progressiveEnglishGrammerPages}/>
      <FeatureSection
        heading="Progressive English Grammer Series Features"
        features={progressiveEnglishGrammarFeatures}
      />
    </Layout>
  );
};

export default ProgressiveEnglishGrammer;
