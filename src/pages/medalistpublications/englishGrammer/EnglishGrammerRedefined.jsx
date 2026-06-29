import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { englishGrammarRedefinedFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const englishGrammerRedefinedPages = loadImages(
  import.meta.glob("/src/assets/images/english-grammar-redefined/*.png", {
    eager: true,
  }),
);

const EnglishGrammerRedefined = () => {
  return (
    <Layout>
      <HeroBanner title="English Grammer Redefined" />
      <FlipBook pages={englishGrammerRedefinedPages}/>
      <FeatureSection
        heading="English Grammer Redefined Series Features"
        features={englishGrammarRedefinedFeatures}
      />
    </Layout>
  );
};

export default EnglishGrammerRedefined;
