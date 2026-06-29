import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { revisesEnglishGrammarFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const revisedAdvancedEnglishGrammarPages = loadImages(
  import.meta.glob("/src/assets/images/revised-advanced-english-grammar/*.png", {
    eager: true,
  }),
);

const RevisedAdvancedEnglishGrammer = () => {
  return (
    <Layout>
      <HeroBanner title="Revised Advanced English Grammer" />
      <FlipBook pages={revisedAdvancedEnglishGrammarPages}/>
      <FeatureSection
        heading="Revised Advanced English Grammer Series Features"
        features={revisesEnglishGrammarFeatures}
      />
    </Layout>
  );
};

export default RevisedAdvancedEnglishGrammer;
