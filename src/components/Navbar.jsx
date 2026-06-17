import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import tukLogo from "../assets/images/tuk_logo.png";
import medalistLogo from "../assets/images/medalist-publication-logo.png";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [showBuyBookModal, setShowBuyBookModal] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* LEFT SIDE */}
            <div className="flex items-center gap-8">
              {/* TUK DROPDOWN */}
              <div className="relative group">
                <button className="flex items-center gap-2">
                  <img src={tukLogo} alt="TUK" className="h-12" />
                  <ChevronDown size={18} />
                </button>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-lg w-80 z-50">
                  {/* Kindergarten Series */}
                  <div className="relative group/kg">
                    <button className="w-full flex justify-between items-center px-4 py-2 hover:bg-blue-500 hover:text-white">
                      Kindergarten Series
                      <ChevronRight size={16} />
                    </button>

                    <div className="absolute left-full top-0 hidden group-hover/kg:block bg-white shadow-xl rounded-lg w-72">
                      <div className="relative group/play">
                        <button className="w-full flex justify-between items-center px-4 py-2 hover:bg-blue-500 hover:text-white">
                          Play and Learn Series
                          <ChevronRight size={16} />
                        </button>

                        <div className="absolute left-full top-0 hidden group-hover/play:block bg-white shadow-xl rounded-lg w-60">
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                          >
                            Nursery
                          </a>

                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                          >
                            Lower Kindergarten
                          </a>

                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                          >
                            Upper Kindergarten
                          </a>
                        </div>
                      </div>

                      <div className="relative group/book">
                        <button className="w-full flex justify-between items-center px-4 py-2 hover:bg-blue-500 hover:text-white">
                          My Play Book Series
                          <ChevronRight size={16} />
                        </button>

                        <div className="absolute left-full top-0 hidden group-hover/book:block bg-white shadow-xl rounded-lg w-60">
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                          >
                            Nursery
                          </a>

                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                          >
                            Lower Kindergarten
                          </a>

                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                          >
                            Upper Kindergarten
                          </a>
                        </div>
                      </div>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Resource Repository Kindergarten
                      </a>
                    </div>
                  </div>

                  {/* GK Series */}
                  <div className="relative group/gk">
                    <button className="w-full flex justify-between items-center px-4 py-2 hover:bg-blue-500 hover:text-white">
                      General Knowledge Series
                      <ChevronRight size={16} />
                    </button>

                    <div className="absolute left-full top-0 hidden group-hover/gk:block bg-white shadow-xl rounded-lg w-72">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        New Wonders of GK
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Revised Universal GK
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Revised Progressive GK
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Wonders of GK
                      </a>
                    </div>
                  </div>

                  {/* Computer Series */}
                  <div className="relative group/computer">
                    <button className="w-full flex justify-between items-center px-4 py-2 hover:bg-blue-500 hover:text-white">
                      Computer Series
                      <ChevronRight size={16} />
                    </button>

                    <div className="absolute left-full top-0 hidden group-hover/computer:block bg-white shadow-xl rounded-lg w-72">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Futuristic Computer
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Artificial Intelligence
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Advanced Computer
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Computer Buddy
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* MEDALIST */}
              <div className="relative group">
                <button className="flex items-center gap-2">
                  <img src={medalistLogo} alt="Medalist" className="h-12" />
                  <ChevronDown size={18} />
                </button>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-lg w-80 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                  >
                    Advanced English Reader Series
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                  >
                    Advanced Maths Series
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                  >
                    Environmental Studies Series
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                  >
                    Advanced Science Series
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                  >
                    Advanced Semester Book Series
                  </a>

                  {/* English Grammar */}
                  <div className="relative group/english">
                    <button className="w-full flex justify-between items-center px-4 py-2 hover:bg-blue-500 hover:text-white">
                      English Grammar Series
                      <ChevronRight size={16} />
                    </button>

                    <div className="absolute left-full top-0 hidden group-hover/english:block bg-white shadow-xl rounded-lg w-72">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Revised Advanced English Grammar
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Advanced English Grammar
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Progressive English Grammar
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        English Grammar Redefined
                      </a>
                    </div>
                  </div>

                  {/* Hindi Grammar */}
                  <div className="relative group/hindi">
                    <button className="w-full flex justify-between items-center px-4 py-2 hover:bg-blue-500 hover:text-white">
                      Hindi Grammar Series
                      <ChevronRight size={16} />
                    </button>

                    <div className="absolute left-full top-0 hidden group-hover/hindi:block bg-white shadow-xl rounded-lg w-72">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Revised Sampoorna Hindi Vyakaran
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Sampoorna Hindi Vyakaran
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      >
                        Samast Hindi Vyakaran
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-2 text-base font-medium">
              <button
                onClick={() => setShowLoginModal(true)}
                className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Student Login
              </button>

              <button
                onClick={() => setShowTeacherModal(true)}
                className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
              >
                Teacher Resources
              </button>

              <button
              onClick={()=> setShowBuyBookModal(true)} className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">
                Buy Books
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/*Student Login Modal Start */}

      {showLoginModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
          <div className="bg-white w-[500px] rounded-md shadow-xl relative p-8">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-3 right-3 bg-sky-500 text-white w-8 h-8 rounded flex items-center justify-center text-xl"
            >
              ×
            </button>

            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold mb-2">
                  User Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="border-t border-gray-200 pt-5 text-center">
                <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded font-semibold">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

     {/*Teacher Login Modal Start */}
     
     {showTeacherModal && (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">
        <div className="bg-white w-[500px] max-w-[95%] rounded-md shadow-xl relative p-8">
          {/*Close Button */}
          <button
          onClick={()=>setShowTeacherModal(false)}
          className="absolute top-3 right-3 bg-sky-500 text-white w-10 h-10 rounded flex items-center justify-center text-2xl">
            ×
          </button>

          

          <div>
            <label className="block text-lg font-medium mb-2">
              User Name:
            </label>
            <input type="text" placeholder="Enter Username" 
            className="w-full border border-gray-300 rounded px-4 py-3 mb-5 focus:outline-none focus:border-sky-500"/>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">
              Password:
            </label>
            <input type="password" placeholder="Enter Password" 
            className="w-full border border-gray-300 rounded px-4 py-3"/>
          </div>

          <div className="border-t border-gray-300 mt-6 pt-6 text-center">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded">
              Submit
            </button>
          </div>

        </div>
      </div>
     )}

     {/*Buy Book Modal Start */}

     {showBuyBookModal && (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] ">
        <div className="bg-white w-[520px] max-w-[95%] rounded-md shadow-2xl relative py-8 px-5">
          {/*Close Button */}
          <button
          onClick={()=>setShowBuyBookModal(false)}
          className="absolute top-3 right-3 bg-sky-500 text-white w-10 h-10 rounded flex items-center justify-center text-2xl">
            ×
          </button>
        <div>
          <h2 className="text-[#1f4e79] text-3xl font-semibold mb-6 text-center">Dear Visitor</h2>
          <p className="text-gray-700 text-[17px] leading-8 text-center">
          Thank you for visiting TUK Publications.
          <br />
          To purchase books online, kindly write to us at{" "}
          <span className="font-bold text-black">
            publications@tukworld.com
          </span>{" "}
          or WhatsApp us at{" "}
          <span className="font-bold text-black">
            9368705302
          </span>.
          <br />
          We will surely get back to you at the earliest.
        </p>
        </div>

      </div>
      </div>

     )}

    </div>
  );
};

export default Navbar;
