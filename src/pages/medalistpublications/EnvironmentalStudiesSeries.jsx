import React from "react";
import Layout from "../../components/Layout";
import HeroBanner from "../../components/HeroBanner";
import FlipBook from "../../components/FlipBook";
import { loadImages } from "../../utils/loadImages";
import { evsFeatures } from "../../data/seriesFeatures";
import FeatureSection from "../../components/FeaturesSection";

const environmentalStudiesPages = loadImages(
  import.meta.glob("/src/assets/images/evs/*.png", {
    eager: true,
  }),
);

const EnvironmentalStudiesSeries = () => {
  return (
    <Layout>
      <HeroBanner title="Environmental Studies" />
      <FlipBook pages={environmentalStudiesPages}/>
      <FeatureSection
        heading="Environmental Studies Series Features"
        features={evsFeatures}
      />
    </Layout>
  );
};

export default EnvironmentalStudiesSeries;
