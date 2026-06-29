import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { advancedEnglishGrammarFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const advancedEnglishGrammerPages = loadImages(
  import.meta.glob("/src/assets/images/revised-advanced-english-grammar/*.png", {
    eager: true,
  }),
);

const AdvancedEnglishGrammer = () => {
  return (
    <Layout>
      <HeroBanner title="Advanced English Grammer" />
      <FlipBook pages={advancedEnglishGrammerPages}/>
      <FeatureSection
        heading="Advanced English Grammer Series Features"
        features={advancedEnglishGrammarFeatures}
      />
    </Layout>
  );
};

export default AdvancedEnglishGrammer;
