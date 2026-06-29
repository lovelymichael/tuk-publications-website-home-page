import React from "react";
import Layout from "../components/Layout";
import InnerHeroBanner from "../components/InnerHeroBanner";

const PrivacyPolicy = () =>{
     return (
    <Layout>
      <InnerHeroBanner title=" Privacy Policy" />
      <div className="max-w-6xl mx-auto mt-15 mb-15 px-4">
        <h3
          className="text-[22px] text-[#333333] text-center font-semibold pb-1"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
        >
          Privacy Policy
        </h3>
        <div className="relative flex justify-center  mb-5">
          <div className="w-[200px] h-[1px] bg-[#ccc]"></div>
          <div className="absolute -bottom-[3px] w-[60px] h-[7px] bg-[#ccc] border-1-[15px] border-r-[15px] border-l-[15px] border-white"></div>
        </div>

        <h1 className="bg-[#eee] border-b border-[#ccc] text-[22px] py-2 px-3 text-[#333333] text-left font-bold">
         How We Protect Your Information
        </h1>

        <p
          className="mb-[25px] text-[17px] leading-[1.8] text-[#333333] text-left font-extralight "
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
        >
         At TUK Publications and Medalist Publications, we are committed to protecting the privacy and personal 
         information of our customers, authors, and schools. Any information collected such as names, contact 
         details, billing information, or delivery addresses is used strictly for order processing, customer 
         communication, service improvement, and internal record-keeping.
        </p>
      
         <p
          className="mb-[25px] text-[17px] leading-[1.8] text-[#333333] text-left font-extralight "
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
        >We do not sell, rent, or share personal information with third parties, except where required by law or 
        for essential service providers (such as payment gateways or logistics partners) who are bound by 
        confidentiality obligations.</p>

        <p
          className="mb-[25px] text-[17px] leading-[1.8] text-[#333333] text-left font-extralight "
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
        >We do not sell, rent, or share personal information with third parties, except where required by 
        law or for essential service providers (such as payment gateways or logistics partners) who are bound 
        by confidentiality obligations.</p>
        

        <h1 className="bg-[#eee] border-b border-[#ccc] text-[22px] py-2 px-3 text-[#333333] text-left font-bold">
          Grievance Officer
        </h1>
        <p
          className="mb-[25px] text-[17px] leading-[1.8] text-[#333333] text-left font-extralight "
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
        >
          For queries, complaints or grievances, User(s) may contact: - <br/> <br/>
<strong>Email:</strong> publications@tukworld.com  <br/>
<strong>Phone:</strong> 7455959595
        </p>

        <p
          className="mb-[25px] text-[17px] leading-[1.8] text-[#333333] text-left font-extralight "
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
        >TUK Publications and Medalist Publications shall endeavor to resolve grievances within a reasonable time 
        in accordance with applicable laws.</p>

      </div>
    </Layout>
  );
}

export default PrivacyPolicy;