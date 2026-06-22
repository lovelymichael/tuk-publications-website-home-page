import React from "react";
import { FaMapMarkedAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
        {/*Address*/}
        <div className="border border-[#e7e7e7] border-b-[5px] border-b-[#ccc] bg-[#f5f5f5] relative">
            <div className="inline-block text-white px-5 py-2 font-bold">
                <div className="contactstrip">
                Address
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-8 py-4">
                <div>
                    <h3 className="font-bold text-2xl mb-3">Noida Office:</h3>
                    <p>323 & 323 A, 3rd Floor
              <br />
              Tower-B, i-thum A-40, Sector-62
              <br />
              Noida (U.P.) - 201301</p>
                </div>

                <div>
                    <h3 className="font-bold text-2xl mb-3">Meerut Office:</h3>
                    <p>
              B-57, Taxila Colony, Meerut,
              <br />
              Meerut, Uttar Pradesh, 250002
            </p>
                </div>
            </div>
        </div>
        {/*Contact Mail */}

       <div className="border border-[#e7e7e7] border-b-[5px] border-b-[#ccc] bg-[#f5f5f5] relative">
            <div className="inline-block text-white px-5 py-2 font-bold">
                <div className="contactstrip">Contact Mail</div>
            </div>

            <div className="px-8 py-4">
                <h3 className="font-bold text-2xl mb-3">Mail  Id's:</h3>
                <p className="text-blue-600">enquiry@tukworld.com</p>
                <p className="text-blue-600">support@tukworld.com</p>
                <p className="text-blue-600">feedback@tukworld.com</p>
            </div>
        </div>

        {/*HelpLine */}
        <div className="border border-[#e7e7e7] border-b-[5px] border-b-[#ccc] bg-[#f5f5f5] relative">
            <div className="inline-block text-white px-5 py-2 font-bold">
                 <div className="contactstrip">Helpline Number</div>
            </div>

           <div className="grid md:grid-cols-2 gap-6 px-8 py-4">
    <div>
      <h2 className="text-2xl font-bold mb-2">
        Toll-Free
      </h2>
      <p>1800-123-668888</p>
    </div>

    <div>
            <p>
        +91-7455959595
        <br />
        +91-7455969696
      </p>
    </div>
  </div>
        </div>
    </div>
  );
};

export default ContactInfo;
