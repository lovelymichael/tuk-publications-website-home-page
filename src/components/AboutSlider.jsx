import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import revisedthecomputerhub1to8 from "../assets/images/about-slider-images/revisedthecomputerhub1to8.png";
import revisedadvancedenglishgrammar1to5 from "../assets/images/about-slider-images/revisedadvancedenglishgrammar1to5.png";
import sampoornahindivyakaran1to5 from "../assets/images/about-slider-images/sampoornahindivyakaran1to5.png";
import kindergartenSeries from "../assets/images/about-slider-images/kindergarten-series.png";
import kindergartekindergartenSeriesPracticeZonenSeries from "../assets/images/about-slider-images/kindergarten-series-practice-zone.png";
import advancedEnglishReader from "../assets/images/about-slider-images/advanced-english-reader.png";
import englishGrammarRedefined from "../assets/images/about-slider-images/english-grammar-redefined.png";
import advancedMaths from "../assets/images/about-slider-images/advanced-maths.png";
import advancedScience from "../assets/images/about-slider-images/advanced-science.png";
import evs from "../assets/images/about-slider-images/evs.png";
import advancedSemesterBook from "../assets/images/about-slider-images/advanced-semester-book.png";
import sampurnaHindi from "../assets/images/about-slider-images/sampurna-hindi.png";
import samastHindi from "../assets/images/about-slider-images/samast-hindi.png";
import wondersGk from "../assets/images/about-slider-images/wonders-gk.png";
import advancedGk from "../assets/images/about-slider-images/advanced-gk.png";
import universalGk from "../assets/images/about-slider-images/universal-gk.png";
import integratedGk from "../assets/images/about-slider-images/integrated-gk.png";
import gkRefined from "../assets/images/about-slider-images/gk-refined.png";
import progressiveGk from "../assets/images/about-slider-images/progressive-gk.png";
import advancedComputer from "../assets/images/about-slider-images/advanced-computer.png";
import gkJunction from "../assets/images/about-slider-images/gk-junction.png";
import computerHub from "../assets/images/about-slider-images/computer-hub.png";
import computerGalaxy from "../assets/images/about-slider-images/computer-galaxy.png";
import computerJunction from "../assets/images/about-slider-images/computer-junction.png";
import integratedComputer from "../assets/images/about-slider-images/integrated-computer.png";
import computerBuddy from "../assets/images/about-slider-images/computer-buddy.png";
import computerCompanion from "../assets/images/about-slider-images/computer-companion.png";
import artificialIntelligence from "../assets/images/about-slider-images/artificial-intelligence.png";

import "swiper/css";
import { Link } from "react-router-dom";

const books = [
  {
    title: "Revised The Computer Hub",
    subtitle: "(Nursery, LKG & UKG)",
    image: revisedthecomputerhub1to8,
    link: "/about-revised-the-computer-hub",
  },
  {
    title: "Revised Advanced English Grammar",
    subtitle: "(Nursery, LKG & UKG)",
    image: revisedadvancedenglishgrammar1to5,
    link: "/about-revised-advanced-english-grammar",
  },
  {
    title: "Revised Sampoorna Hindi Vyakaran",
    subtitle: "(Classes 1 to 8)",
    image: sampoornahindivyakaran1to5,
    link: "/about-revised-sampooran-hindi-vyakaran",
  },
  {
    title: "Play and Learn Series & Practice Zone",
    subtitle: "(Classes 1 to 8)",
    image: kindergartenSeries,
    link: "/about-myplay-book",
  },
  {
    title: "Kindergarten Series & Practice Zone ",
    subtitle: "(Classes 1 to 8)",
    image: kindergartekindergartenSeriesPracticeZonenSeries,
    link: "/about-practice-zone",
  },
  {
    title: "Advanced English Grammar",
    subtitle: "(Classes 1 to 8)",
    image: advancedEnglishReader,
    link: "/about-advanced-english-grammar",
  },
  {
    title: "English Grammar Redefined",
    subtitle: "(Classes 1 to 8)",
    image: englishGrammarRedefined,
    link: "/about-english-grammar-redefined",
  },
  {
    title: "Advanced Maths",
    subtitle: "(Classes 1 to 8)",
    image: advancedMaths,
    link: "/about-advanced-maths",
  },
  {
    title: "Advanced Science",
    subtitle: "(Classes 1 to 8)",
    image: advancedScience,
    link: "/about-advanced-science",
  },
  {
    title: "Environmental Studies",
    subtitle: "(Classes 1 to 8)",
    image: evs,
    link: "/about-evs",
  },
  {
    title: "Advanced Semester Book",
    subtitle: "(Classes 1 to 8)",
    image: advancedSemesterBook,
    link: "/about-advanced-semester-book",
  },
  {
    title: "Sampoorna Hindi Vyakaran",
    subtitle: "(Classes 1 to 8)",
    image: sampurnaHindi,
    link: "/about-sampooran-hindi-vyakaran",
  },
  {
    title: "Samast Hindi Vyakaran",
    subtitle: "(Classes 1 to 8)",
    image: samastHindi,
    link: "/about-samast-hindi-vyakaran",
  },
  {
    title: "Wonders of GK ",
    subtitle: "(Classes 1 to 8)",
    image: wondersGk,
    link: "/about-wonders-gk",
  },
  {
    title: "Advanced GK",
    subtitle: "(Classes 1 to 8)",
    image: advancedGk,
    link: "/about-advanced-gk",
  },
  {
    title: "Universal GK",
    subtitle: "(Classes 1 to 8)",
    image: universalGk,
    link: "/about-universal-gk",
  },
  {
    title: "Integrated GK",
    subtitle: "(Classes 1 to 8)",
    image: integratedGk,
    link: "/about-integrated-gk",
  },
  {
    title: "GK REdefined",
    subtitle: "(Classes 1 to 8)",
    image: gkRefined,
    link: "/about-gk-redefined",
  },
  {
    title: "Progressive GK",
    subtitle: "(Classes 1 to 8)",
    image: progressiveGk,
    link: "/about-progressive-gk",
  },
  {
    title: "GK Junction",
    subtitle: "(Classes 1 to 8)",
    image: gkJunction,
    link: "/about-gk-junction",
  },
  {
    title: "Advanced Computer",
    subtitle: "(Classes 1 to 8)",
    image: advancedComputer,
    link: "/about-advanced-computer",
  },
  {
    title: "The Computer Hub",
    subtitle: "(Classes 1 to 8)",
    image: computerHub,
    link: "/about-thecomputerhub",
  },
  {
    title: "Computer Galaxy",
    subtitle: "(Classes 1 to 8)",
    image: computerGalaxy,
    link: "/about-computer-galaxy",
  },
  {
    title: "Computer Junction",
    subtitle: "(Classes 1 to 8)",
    image: computerJunction,
    link: "/about-computer-junction",
  },
  {
    title: "Integrated Computer",
    subtitle: "(Classes 1 to 8)",
    image: integratedComputer,
    link: "/about-integrated-computer",
  },
  {
    title: "Computer Buddy",
    subtitle: "(Classes 1 to 8)",
    image: computerBuddy,
    link: "/about-computer-buddy",
  },
  {
    title: "Computer Companion",
    subtitle: "(Classes 1 to 8)",
    image: computerCompanion,
    link: "/about-computer-companion",
  },
  {
    title: "Artificial Intelligence",
    subtitle: "(Classes 1 to 8)",
    image: artificialIntelligence,
    link: "/about-ai",
  },
];
const AboutSlider = () => {
  return (
    <div className="about-slider py-10 relative">
        <button className="custom-prev">
      ❮
    </button>

    <button className="custom-next">
      ❯
    </button>
      <Swiper
         navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
        modules={[Autoplay, Navigation]}
        slidesPerView={5}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 0,
          },
          550: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {books.map((book, index) => (
          <SwiperSlide key={index}>
             <Link to={book.link}>
            <div className="bg-white rounded-lg overflow-hidden text-center">
              <img
                src={book.image}
                alt={book.title}
                className=" object-cover max-w-[160px] mx-auto"
              />
              <div className=" font-semibold text-lg">
                {book.title}
                <br />
                <span className="font-normal text-md">{book.subtitle}</span>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default AboutSlider;
