import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () =>{
    return(
        <footer className="bg-black text-white mt-5">
            {/*Main Footer */}
            <div className="max-w-7xl mx-auto px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/*Company */}
                    <div className="pr-10">
                        <h3 className="text-xl font-semibold uppercase mb-6">
                            Company
                        </h3>
                        <div className="w-8 h-[2px] bg-sky-500 mb-6"></div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="hover:text-white cursor-pointer">About Us</li>
                            <li className="hover:text-white cursor-pointer">Contact Us</li>
                            <li className="hover:text-white cursor-pointer">Term & Conditions</li>
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>
                    {/*Get in Touch */}
                    <div className="border-l border-gray-700 px-10">
                        <h3 className="text-xl font-semibold uppercase mb-6">Get in Touch</h3>

                        <div className="w-8 h-[2px] bg-sky-500 mb-6"></div>

                        <div className="grid grid-cols-2 gap-y-5">
                            <div className="flex items-center gap-3">
                                <FaFacebook className="text-xl"/>
                                <span>Facebook</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaLinkedinIn className="text-xl"/>
                                <span>LinkedIn</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaTwitter className="text-xl"/>
                                <span>Twitter</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaYoutube className="text-xl"/>
                                <span>Youtube</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaInstagram className="text-xl"/>
                                <span>Instagram</span>
                            </div>
                        </div>
                    </div>
                        {/*Address */}
              <div className="border-l border-gray-700 px-10">
                    <h3 className="text-xl font-semibold uppercase mb-6">
                        Address
                    </h3>
                    <div className="w-8 h-[2px] bg-sky-500 mb-6"></div>
                    <p className="text-gray-300 leading-8">
                        B-57, Taxila Colony
                        <br/>
                        Meerut, Uttar Pradesh, 250002
                        </p>                       
                </div>
                </div>
            </div>
            {/*Copyright */}
            <div className="border-t border-gray-800 py-5">
                <p className="text-center text-gray-400 text-sm">
                     Copyright © 2026 TUK Publications & Medalist Publications. 
                     (A Unit of Midastech Orbit Pvt. Ltd.) All rights reserved. 
                </p>                
            </div>
        </footer>
    )
}
export default Footer;