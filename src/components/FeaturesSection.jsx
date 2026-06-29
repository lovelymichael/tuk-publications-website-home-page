import { FaCheck } from "react-icons/fa";
import cartoonImage from "../assets/images/cartoon.png";

const FeatureSection = ({ heading, features, isHindi = false }) => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-10">
          <div
            className={`bg-[#1a8ccb] text-white px-5 pt-3 pb-2 font-semibold rounded-tl-[20px]
    ${isHindi ? "hindi-content text-xl md:text-2xl" : "text-3xl"}`}
            style={{
              fontFamily: isHindi ? "k010" : "'Open Sans', sans-serif",
            }}
          >
            {heading}
          </div>
          <div className="flex-1 h-[2px] bg-[#1a8ccb]"></div>
        </div>

        <ul className="space-y-5 mb-10">
          {features.map((item, index) => (
            <li
              key={index}
              className="flex gap-4 text-lg text-gray-800"
              style={{
                fontFamily: isHindi ? "k010" : "'Open Sans', sans-serif",
              }}
            >
              <FaCheck className="text-sky-500 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="relative">
          <div className="w-[120px] absolute bottom-0 right-5">
            <img src={cartoonImage} alt="cartoon" />
          </div>
        </div>
        <div className="h-5 bg-[#1a8ccb] rounded-bl-[10px]"></div>
      </div>
    </section>
  );
};
export default FeatureSection;
