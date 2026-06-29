import React from "react";
import Layout from "../../../components/Layout";
import HeroBanner from "../../../components/HeroBanner";
import FlipBook from "../../../components/FlipBook";
import { loadImages } from "../../../utils/loadImages";
import { futuristicComputerFeatures } from "../../../data/seriesFeatures";
import FeatureSection from "../../../components/FeaturesSection";

const futuristicComputerPages = loadImages(
  import.meta.glob("/src/assets/images/futuristic-computer/*.png", {
    eager: true,
  }),
);

const FuturisticComputer = () => {
  return (
    <Layout>
      <HeroBanner title="Futuristic Computer" />
      <FlipBook pages={futuristicComputerPages}/>
      <FeatureSection
        heading="Futuristic Computer Series Features"
        features={futuristicComputerFeatures}
      />
    </Layout>
  );
};

export default FuturisticComputer;
