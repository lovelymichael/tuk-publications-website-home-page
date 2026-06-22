import { FaCheck } from "react-icons/fa";
import cartoonImage from "../assets/images/cartoon.png"

const features = [
  "Content curated in accordance with the guidelines laid down in NEP 2020 and NCF 2023",
  "Children will love the vivid &amp; colourful pictures and illustrations",
  "The content is presented in an easy and simple way to make learning enjoyable",
  "Extensive exercises to strengthen the concepts",
  "Instructions that are simple and easy to understand",
  "The content will develop inquisitiveness and imagination in children",
  "Reciting a rhyme helps a child develop confidence and the ability to speak in front of others",
  "Parents will become co-learners with their children",
];

const FeatureSection = () =>{
    return(
        <section className="py-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-10">
                    <div className="bg-[#1a8ccb] text-white px-5 pt-1 pb-2 font-semibold text-3xl rounded-tl-[20px]"
                     style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        Nursery Series Features
                    </div>
                    <div className="flex-1 h-[2px] bg-[#1a8ccb]"></div>
                </div>

                <ul className="space-y-5 mb-10" >
                    {features.map((item, index)=>(
                        <li key={index} className="flex gap-4 text-lg text-gray-800"  style={{ fontFamily: "'Open Sans', sans-serif" }}>
                            <FaCheck className="text-sky-500 mt-1"/>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                    <div className="relative">
                        <div className="w-[120px] absolute bottom-0 right-5">
                            <img src={cartoonImage} alt="cartoon"/>
                        </div>
                    </div>
                <div className="h-5 bg-[#1a8ccb] rounded-bl-[10px]"></div>
            </div>
        </section>
    )
}
export default FeatureSection;
