import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import TermsConditions from "../pages/TermsConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Nursery from "../pages/tukpublications/kindergarten/playLearnSeries/Nursery";
import Lkg from "../pages/tukpublications/kindergarten/playLearnSeries/LowerKindergaten";
import Ukg from "../pages/tukpublications/kindergarten/playLearnSeries/UpperKintergarten";

import PlayBookNursery from "../pages/tukpublications/kindergarten/playBookSeries/Nursery";
import PlayBookLkg from "../pages/tukpublications/kindergarten/playBookSeries/LowerKindergaten";
import PlayBookUkg from "../pages/tukpublications/kindergarten/playBookSeries/UpperKintergarten";

import ResourceRepositoryKindergarten from "../pages/tukpublications/kindergarten/ResourceRepositoryKindergarten";

import NewWondersGk from "../pages/tukpublications/gk/NewWondersGk";
import RevisedUniversalGk from "../pages/tukpublications/gk/RevisedUniversalGk";
import RevisedProgressiveGk from "../pages/tukpublications/gk/RevisedProgressiveGk";
import WondersGk from "../pages/tukpublications/gk/WondersGk";
import AdvancedGk from "../pages/tukpublications/gk/AdvancedGk";
import UniversalGk from "../pages/tukpublications/gk/UniversalGk";
import IntegratedGk from "../pages/tukpublications/gk/IntegratedGk";
import GKRedefined from "../pages/tukpublications/gk/GKRedefined";
import ProgressiveGk from "../pages/tukpublications/gk/ProgressiveGk";
import GkJunction from "../pages/tukpublications/gk/GkJunction";

import FuturisticComputer from "../pages/tukpublications/computer/FuturisticComputer";
import ArtificialIntelligence from "../pages/tukpublications/computer/ArtificialIntelligence";
import AdvancedComputer from "../pages/tukpublications/computer/AdvancedComputer";
import ProgressiveComputer from "../pages/tukpublications/computer/ProgressiveComputer";
import RevisedTheComputerHub from "../pages/tukpublications/computer/RevisedTheComputerHub";
import TheComputerHub from "../pages/tukpublications/computer/TheComputerHub";
import ComputerGalaxy from "../pages/tukpublications/computer/ComputerGalaxy";
import ComputerJunction from "../pages/tukpublications/computer/ComputerJunction";
import IntergratedComputer from "../pages/tukpublications/computer/IntergratedComputer";
import ComputerBuddy from "../pages/tukpublications/computer/ComputerBuddy";
import ComputerCompanion from "../pages/tukpublications/computer/ComputerCompanion";

import AdvancedEnglishReaderSeries from "../pages/medalistpublications/AdvancedEnglishReaderSeries";
import AdvancedMathSeries from "../pages/medalistpublications/AdvancedMathSeries";
import EnvironmentalStudiesSeries from "../pages/medalistpublications/EnvironmentalStudiesSeries";
import AdvancedScienceSeries from "../pages/medalistpublications/AdvancedScienceSeries";
import AdvancesSemesterBookSeries from "../pages/medalistpublications/AdvancesSemesterBookSeries";

import RevisedAdvancedEnglishGrammer from "../pages/medalistpublications/englishGrammer/RevisedAdvancedEnglishGrammer";
import AdvancedEnglishGrammer from "../pages/medalistpublications/englishGrammer/AdvancedEnglishGrammer";
import ProgressiveEnglishGrammer from "../pages/medalistpublications/englishGrammer/ProgressiveEnglishGrammer";
import EnglishGrammerRedefined from "../pages/medalistpublications/englishGrammer/EnglishGrammerRedefined";

import RevisedSampooranaHindiVyakaran from "../pages/medalistpublications/hindiGrammer/RevisedSampooranaHindiVyakaran";
import SampooranaHindiVyakaran from "../pages/medalistpublications/hindiGrammer/SampooranaHindiVyakaran";
import SamastHindiVyakaran from "../pages/medalistpublications/hindiGrammer/SamastHindiVyakaran";

{/*About-page-slider-pages-Routing */}
import AboutRevisedComputerHub from "../pages/aboutSlider/AboutRevisedComputerHub";
import AboutRevisedAdvancedEnglishGrammar from "../pages/aboutSlider/AboutRevisedAdvancedEnglishGrammar";
import AboutRevisedSampooranHindiVyakaran from "../pages/aboutSlider/AboutRevisedSampooranHindiVyakaran";
import AboutMyplayBook from "../pages/aboutSlider/AboutMyplayBook";
import AboutPracticeZone from "../pages/aboutSlider/Aboutpracticezone";
import AboutAdvancedEnglishGrammar from "../pages/aboutSlider/AboutAdvancedEnglishGrammar";
import AboutEnglishGrammarRedefined from "../pages/aboutSlider/AboutEnglishGrammarRedefined";
import AboutAdvancedMaths from "../pages/aboutSlider/AboutAdvancedMaths";
import AboutAdvancedScience  from "../pages/aboutSlider/AboutAdvancedScience";
import AboutEvs from "../pages/aboutSlider/AboutEvs";
import AboutAdvancedSemesterBook from "../pages/aboutSlider/AboutAdvancedSemesterBook";
import AboutSampooranHindiVyakaran from "../pages/aboutSlider/AboutSampooranHindiVyakaran";
import AboutSamastHindiVyakaran from "../pages/aboutSlider/AboutSamastHindiVyakaran";
import AboutWondersGk from "../pages/aboutSlider/AboutWondersGk";
import AboutUniversalGk from "../pages/aboutSlider/AboutUniversalGk";
import AboutIntegratedGk from "../pages/aboutSlider/AboutIntegratedGk";
import AboutGkRedefined from "../pages/aboutSlider/AboutGkRedefined";
import AboutProgressiveGk from "../pages/aboutSlider/AboutProgressiveGk";
import AboutGkJunction from "../pages/aboutSlider/AboutGkJunction";
import AboutAdvancedComputer from "../pages/aboutSlider/AboutAdvancedComputer";
import AboutComputerGalaxy from "../pages/aboutSlider/AboutComputerGalaxy";
import AboutComputerJunction from "../pages/aboutSlider/AboutComputerJunction";
import AboutIntegratedComputer from "../pages/aboutSlider/AboutIntegratedComputer";
import AboutComputerBuddy from "../pages/aboutSlider/AboutComputerBuddy";
import AboutComputerCompanion from "../pages/aboutSlider/AboutComputerCompanion";
import AboutAi from "../pages/aboutSlider/AboutAi";
import AbouttheComputerHub from "../pages/aboutSlider/AbouttheComputerHub";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/contact-us" element={<ContactUs />} />

      <Route path="/terms-consditions" element={<TermsConditions />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      <Route
        path="/kindergarten-play-n-learn-books-nursery"
        element={<Nursery />}
      />
      <Route path="/kindergarten-play-n-learn-books-lkg" element={<Lkg />} />
      <Route path="/kindergarten-play-n-learn-books-ukg" element={<Ukg />} />

      <Route
        path="/kindergarten-play-books-series-nursery"
        element={<PlayBookNursery />}
      />
      <Route
        path="/kindergarten-play-books-series-lkg"
        element={<PlayBookLkg />}
      />
      <Route
        path="/kindergarten-play-books-series-ukg"
        element={<PlayBookUkg />}
      />

      <Route
        path="/resource-repository"
        element={<ResourceRepositoryKindergarten />}
      />

      <Route path="/new-wonders-gk" element={<NewWondersGk />} />
      <Route path="/revised-universal-gk" element={<RevisedUniversalGk />} />
      <Route
        path="/revised-progressive-gk"
        element={<RevisedProgressiveGk />}
      />
      <Route path="/wonders-gk" element={<WondersGk />} />
      <Route path="/advanced-gk" element={<AdvancedGk />} />
      <Route path="/universal-gk" element={<UniversalGk />} />
      <Route path="/integrated-gk" element={<IntegratedGk />} />
      <Route path="/gk-redefined" element={<GKRedefined />} />
      <Route path="/progressive-gk" element={<ProgressiveGk />} />
      <Route path="/gk-junction" element={<GkJunction />} />

      <Route path="/futuristic-computer" element={<FuturisticComputer />} />
      <Route
        path="/artificial-intelligence"
        element={<ArtificialIntelligence />}
      />
      <Route path="/advanced-computer" element={<AdvancedComputer />} />
      <Route path="/progressive-computer" element={<ProgressiveComputer />} />
      <Route
        path="/revised-the-computer-hub"
        element={<RevisedTheComputerHub />}
      />
      <Route path="/thecomputerhub" element={<TheComputerHub />} />
      <Route path="/computer-galaxy" element={<ComputerGalaxy />} />
      <Route path="/computer-junction" element={<ComputerJunction />} />
      <Route path="/computer-integrated" element={<IntergratedComputer />} />
      <Route path="/computer-cbse" element={<ComputerBuddy />} />
      <Route path="/computer-cisce" element={<ComputerCompanion />} />

      <Route
        path="/advanced-english-reader"
        element={<AdvancedEnglishReaderSeries />}
      />
      <Route path="/advanced-math" element={<AdvancedMathSeries />} />
      <Route path="/evs" element={<EnvironmentalStudiesSeries />} />
      <Route path="/advanced-science" element={<AdvancedScienceSeries />} />
      <Route
        path="/advanced-semester-book"
        element={<AdvancesSemesterBookSeries />}
      />

      <Route
        path="/revised-advanced-english-grammar"
        element={<RevisedAdvancedEnglishGrammer />}
      />
      <Route
        path="/advanced-english-grammar"
        element={<AdvancedEnglishGrammer />}
      />
      <Route
        path="/progressive-english-grammar"
        element={<ProgressiveEnglishGrammer />}
      />
      <Route
        path="/english-grammar-redefined"
        element={<EnglishGrammerRedefined />}
      />

      <Route
        path="/revised-sampooran-hindi-vyakaran"
        element={<RevisedSampooranaHindiVyakaran />}
      />
      <Route
        path="/sampooran-hindi-vyakaran"
        element={<SampooranaHindiVyakaran />}
      />
      <Route path="/samast-hindi-vyakaran" element={<SamastHindiVyakaran />} />

      {/*About-page-slider-pages-Routing */}
      <Route
        path="/about-revised-the-computer-hub"
        element={<AboutRevisedComputerHub />}
      />
      <Route
        path="/about-revised-advanced-english-grammar"
        element={<AboutRevisedAdvancedEnglishGrammar />}
      />
      <Route
        path="/about-revised-sampooran-hindi-vyakaran"
        element={<AboutRevisedSampooranHindiVyakaran />}
      />
      <Route path="/about-myplay-book" element={<AboutMyplayBook />} />
      <Route path="/about-practice-zone" element={<AboutPracticeZone />} />
      <Route
        path="/about-advanced-english-grammar"
        element={<AboutAdvancedEnglishGrammar />}
      />
      <Route
        path="/about-english-grammar-redefined"
        element={<AboutEnglishGrammarRedefined />}
      />
      <Route path="/about-advanced-maths" element={<AboutAdvancedMaths />} />
      <Route
        path="/about-advanced-science"
        element={<AboutAdvancedScience />}
      />
      <Route path="/about-evs" element={<AboutEvs />} />
      <Route
        path="/about-advanced-semester-book"
        element={<AboutAdvancedSemesterBook />}
      />
      <Route
        path="/about-sampooran-hindi-vyakaran"
        element={<AboutSampooranHindiVyakaran />}
      />
      <Route
        path="/about-samast-hindi-vyakaran"
        element={<AboutSamastHindiVyakaran />}
      />
      <Route path="/about-wonders-gk" element={<AboutWondersGk />} />
      <Route path="/about-universal-gk" element={<AboutUniversalGk />} />
      <Route path="/about-integrated-gk" element={<AboutIntegratedGk />} />
      <Route path="/about-gk-redefined" element={<AboutGkRedefined />} />
      <Route path="/about-progressive-gk" element={<AboutProgressiveGk />} />
      <Route path="/about-gk-junction" element={<AboutGkJunction />} />
      <Route path="/about-advanced-computer" element={<AboutAdvancedComputer />} />
      <Route path="/about-thecomputerhub" element={<AbouttheComputerHub />} />
      <Route path="/about-computer-galaxy" element={<AboutComputerGalaxy />} />
      <Route path="/about-computer-junction" element={<AboutComputerJunction />} />
      <Route path="/about-integrated-computer" element={<AboutIntegratedComputer />} />
      <Route path="/about-computer-buddy" element={<AboutComputerBuddy />} />
      <Route path="/about-computer-companion" element={<AboutComputerCompanion />} />
      <Route path="/about-ai" element={<AboutAi />} />
    </Routes>
  );
}

export default AppRoutes;
