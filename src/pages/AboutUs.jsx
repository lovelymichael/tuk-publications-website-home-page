import React from 'react';
import  Layout  from "../components/Layout";
import InnerHeroBanner from '../components/InnerHeroBanner';
import AboutSlider from '../components/AboutSlider';


const AboutUs = () =>{
    return (
        <Layout>
            <InnerHeroBanner title="About Us" />
            <div className='max-w-6xl mx-auto mt-15 mb-15 px-4 text-center'>
                <p className="mb-[25px] text-[17px] leading-[1.8] text-[#333333] text-center font-extralight "
  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                    TUK Publications is the publication wing of The Ultimate Knowledge (TUK). The Ultimate Knowledge is 
                    a pioneer in propagating the use of Technology in Education, especially in Schools. Medalist 
                    Publications is an imprint of TUK Publications.
                </p>

                <p className="mb-[25px] text-[17px] leading-[1.8] text-[#333333] text-center font-extralight "
  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
    Well known for its excellent quality of content and high standards of printing, TUK Publications is one of 
    the top publications for many book titles of CBSE and CISCE, and publishes school text books for General 
    Knowledge, Computer, Artificial Intelligence (AI) and for Kindergarten.
  </p>

  <p className="mb-[25px] text-[17px] leading-[1.8] text-[#333333] text-center font-extralight "
  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
    Medalist Publications is a leading publishing house for text books for English Reader, Mathematics, Science, 
    Environmental Studies, English and Hindi Grammar and Semester Books. These books are highly sought after, and 
    have been prescribed in reputed schools all across the country.
  </p>

 

  {/* Decorative Line */}
  <div className='relative flex justify-center mt-12 mb-3'>
    <div className='w-[200px] h-[1px] bg-[#ccc]'></div>
    <div className='absolute -bottom-[3px] w-[60px] h-[7px] bg-[#ccc] border-1-[15px] border-r-[15px] border-l-[15px] border-white'></div>
  </div>

  {/*About Slider */}
   <AboutSlider/>

            </div>
        </Layout>
    )
}

export default AboutUs;
