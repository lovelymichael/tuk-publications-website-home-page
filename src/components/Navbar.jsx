import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, Eye, EyeOff } from "lucide-react";
import tukLogo from "../assets/images/tuk_logo.png";
import medalistLogo from "../assets/images/medalist-publication-logo.png";
import { Link, useNavigate } from "react-router-dom";




const Navbar = () => {

  const navigate = useNavigate();
  
  const [showTukMenu, setShowTukMenu] = useState(false);
  const [showMedalistMenu, setShowMedalistMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [showBuyBookModal, setShowBuyBookModal] = useState(false);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [teacherUsername, setTeacherUsername] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherErrors, setTeacherErrors] = useState({});
  const [showTeacherPassword, setShowTeacherPassword] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowTukMenu(false);
        setShowMedalistMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTeacherLogin = () => {
    let newErrors = {};
    if (!teacherUsername.trim()) {
      newErrors.username = "Username is required";
    }
    if (!teacherPassword.trim()) {
      newErrors.password = "Password is required";
    }

    setTeacherErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Teacher Login Success");
      setShowTeacherModal(false);
    }
  };

  const handleStudentLogin = async () => {
    let newErrors = {};

    if (!username.trim()) {
      newErrors.username = "UserName is Required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is Required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
     return;
    }

        //Api Data
        try{
    const response = await fetch(
      `http://localhost:3001/students?username=${username}&password=${password}`
    );
    const data = await response.json();

    if(data.length>0){
      alert("Login Successful");

      setShowLoginModal(false);
      setUserName("");
      setPassword("");
      setErrors({});

      navigate("/")
    }else{
      alert("Invalid Username or Password");
    }
  }
  catch(error){
    console.log(error);
    alert("Server Error");
  }
  };
  return (
    <div ref={menuRef}>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* LEFT SIDE */}
            <div className="flex items-center gap-8">
              {/* TUK DROPDOWN */}
              <div className="relative group">
                <button
                  onClick={() => {
                    setShowTukMenu(!showTukMenu);
                    setShowMedalistMenu(false);
                  }}
                  className="flex items-center gap-2"
                >
                  <img src={tukLogo} alt="TUK" className="h-12" />
                  <ChevronDown size={18} />
                </button>

                {showTukMenu && (
                  <div className="absolute left-0 top-full bg-white shadow-xl rounded-lg w-80 z-50 py-2">
                    {/* Kindergarten Series */}
                    <div className="relative group/kg">
                      <button className="w-full flex justify-between items-center px-4 py-1 hover:bg-blue-500 hover:text-white">
                        Kindergarten Series
                        <ChevronRight size={16} />
                      </button>

                      <div className="absolute left-full top-0 hidden group-hover/kg:block bg-white shadow-xl rounded-lg w-72 py-2">
                        <div className="relative group/play">
                          <button className="w-full flex justify-between items-center px-4 hover:bg-blue-500 hover:text-white">
                            Play and Learn Series
                            <ChevronRight size={16} />
                          </button>

                          <div className="absolute left-full top-0 hidden group-hover/play:block bg-white shadow-xl rounded-lg w-60 py-2">
                            <Link
                              to="/kindergarten-play-n-learn-books-nursery"
                              className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                            >
                              Nursery
                            </Link>

                            <Link
                              to="/kindergarten-play-n-learn-books-lkg"
                              className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                            >
                              Lower Kindergarten
                            </Link>

                            <Link
                              to="/kindergarten-play-n-learn-books-ukg"
                              className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                            >
                              Upper Kindergarten
                            </Link>
                          </div>
                        </div>

                        <div className="relative group/book">
                          <button className="w-full flex justify-between items-center px-4 py-1 hover:bg-blue-500 hover:text-white">
                            My Play Book Series
                            <ChevronRight size={16} />
                          </button>

                          <div className="absolute left-full top-0 hidden group-hover/book:block bg-white shadow-xl rounded-lg w-60 py-2">
                            <Link
                              to="/nursery"
                              className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                            >
                              Nursery
                            </Link>

                            <Link
                              to="/lkindergarten"
                              className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                            >
                              Lower Kindergarten
                            </Link>

                            <Link
                              to="/ukindergarten"
                              className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                            >
                              Upper Kindergarten
                            </Link>
                          </div>
                        </div>

                        <Link
                          to="/resource-repository"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Resource Repository Kindergarten
                        </Link>
                      </div>
                    </div>

                    {/* GK Series */}
                    <div className="relative group/gk">
                      <button className="w-full flex justify-between items-center px-4 py-1 hover:bg-blue-500 hover:text-white">
                        General Knowledge Series
                        <ChevronRight size={16} />
                      </button>

                      <div className="absolute left-full top-0 hidden group-hover/gk:block bg-white shadow-xl rounded-lg w-72 py-2">
                        <Link
                          to="/new-wonders-gk"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          New Wonders of GK
                        </Link>

                        <Link
                          to="/revised-universal-gk"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Revised Universal GK
                        </Link>

                        <Link
                          to="/revised-progressive-gk"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Revised Progressive GK
                        </Link>

                        <Link
                          to="/wonders-gk"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Wonders of GK
                        </Link>

                        <Link
                          to="/advanced-gk"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Advanced GK
                        </Link>

                        <Link
                          to="/universal-gk"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Universal GK
                        </Link>

                        <Link
                          to="/integrated-gk"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Integrated GK
                        </Link>

                        <Link
                          to="/gk-redefined"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          GK Redefined
                        </Link>

                        <Link
                          to="/progressive-gk"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Progressive GK
                        </Link>

                        <Link
                          to="/gk-junction"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          GK Junction
                        </Link>
                      </div>
                    </div>

                    {/* Computer Series */}
                    <div className="relative group/computer">
                      <button className="w-full flex justify-between items-center px-4 py-1 hover:bg-blue-500 hover:text-white">
                        Computer Series
                        <ChevronRight size={16} />
                      </button>

                      <div className="absolute left-full top-0 hidden group-hover/computer:block bg-white shadow-xl rounded-lg w-72 py-2">
                        <Link
                          to="/futuristic-computer"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Futuristic Computer
                        </Link>

                        <Link
                          to="/artificial-intelligence"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Artificial Intelligence
                        </Link>

                        <Link
                          to="/advanced-computer"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Advanced Computer
                        </Link>

                        <Link
                          to="/progressive-computer"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Progressive Computer
                        </Link>

                        <Link
                          to="/revised-the-computer-hub"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Revised The Computer Hub
                        </Link>

                        <Link
                          to="/thecomputerhub"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          The Computer Hub
                        </Link>

                        <Link
                          to="/computer-galaxy"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Computer Galaxy
                        </Link>

                        <Link
                          to="/computer-junction"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Computer Junction
                        </Link>

                        <Link
                          to="/computer-integrated"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Integrated Computer
                        </Link>

                        <Link
                          to="/computer-cbse"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Computer Buddy
                        </Link>

                        <Link
                          to="/computer-cisce"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Computer Companion
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* MEDALIST */}
              <div className="relative group">
                <button
                  onClick={() => {
                    setShowMedalistMenu(!showMedalistMenu);
                    setShowTukMenu(false);
                  }}
                  className="flex items-center gap-2"
                >
                  <img src={medalistLogo} alt="Medalist" className="h-12" />
                  <ChevronDown size={18} />
                </button>

                {showMedalistMenu && (
                  <div className="absolute left-0 top-full bg-white shadow-xl rounded-lg w-80 z-50 py-2">
                    <Link
                      to="/advanced-english-reader"
                      className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                    >
                      Advanced English Reader Series
                    </Link>

                    <Link
                      to="/advanced-math"
                      className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                    >
                      Advanced Maths Series
                    </Link>

                    <Link
                      to="/evs"
                      className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                    >
                      Environmental Studies Series
                    </Link>

                    <Link
                      to="/advanced-science"
                      className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                    >
                      Advanced Science Series
                    </Link>

                    <Link
                      to="/advanced-semester-book"
                      className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                    >
                      Advanced Semester Book Series
                    </Link>

                    {/* English Grammar */}
                    <div className="relative group/english ">
                      <button className="w-full flex justify-between items-center px-4 py-1 hover:bg-blue-500 hover:text-white">
                        English Grammar Series
                        <ChevronRight size={16} />
                      </button>

                      <div className="absolute left-full top-0 hidden group-hover/english:block bg-white shadow-xl rounded-lg w-72 py-2">
                        <Link
                          to="/revised-advanced-english-grammar"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Revised Advanced English Grammar
                        </Link>

                        <Link
                          to="/advanced-english-grammar"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Advanced English Grammar
                        </Link>

                        <Link
                          to="/progressive-english-grammar"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Progressive English Grammar
                        </Link>

                        <Link
                          to="/english-grammar-redefined"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          English Grammar Redefined
                        </Link>
                      </div>
                    </div>

                    {/* Hindi Grammar */}
                    <div className="relative group/hindi  ">
                      <button className="w-full flex justify-between items-center px-4 py-1 hover:bg-blue-500 hover:text-white ">
                        Hindi Grammar Series
                        <ChevronRight size={16} />
                      </button>

                      <div className="absolute left-full top-0 hidden group-hover/hindi:block bg-white shadow-xl rounded-lg w-72 py-2">
                        <Link
                          to="/revised-sampooran-hindi-vyakaran"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Revised Sampoorna Hindi Vyakaran
                        </Link>

                        <Link
                          to="/sampooran-hindi-vyakaran"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Sampoorna Hindi Vyakaran
                        </Link>

                        <Link
                          to="/samast-hindi-vyakaran"
                          className="block px-4 py-1 hover:bg-blue-500 hover:text-white"
                        >
                          Samast Hindi Vyakaran
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
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
                onClick={() => setShowBuyBookModal(true)}
                className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
              >
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
            <img
              src={tukLogo}
              alt="TUK Logo"
              className="max-w-[300px] mx-auto border-b border-[#ccc] border-b-3"
            />
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-3 right-3 bg-sky-500 text-white w-8 h-8 rounded flex items-center justify-center text-xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-center text-[#333] mb-6">
              Student Login
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold mb-2">
                  User Name:
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter Username"
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-sky-500"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">
                  Password:
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    className="w-full border border-gray-300 rounded px-4 py-3 pr-12 focus:outline-none focus:border-sky-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="border-t border-gray-200 pt-5 text-center">
                <button
                  onClick={handleStudentLogin}
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded font-semibold"
                >
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
              onClick={() => setShowTeacherModal(false)}
              className="absolute top-3 right-3 bg-sky-500 text-white w-10 h-10 rounded flex items-center justify-center text-2xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center text-[#333] mb-6">
              Teachers Resource
            </h2>

            <div>
              <label className="block text-lg font-medium mb-2">
                User Name:
              </label>
              <input
                type="text"
                value={teacherUsername}
                onChange={(e) => setTeacherUsername(e.target.value)}
                placeholder="Enter Username"
                className="w-full border border-gray-300 rounded px-4 py-3 mb-5 focus:outline-none focus:border-sky-500"
              />
              {teacherErrors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {teacherErrors.username}
                </p>
              )}
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">
                Password:
              </label>
              <div className="relative">
                <input
                  type={showTeacherPassword ? "text" : "password"}
                  value={teacherPassword}
                  onChange={(e) => setTeacherPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
                <button
                  type="button"
                  onClick={() => setShowTeacherPassword(!showTeacherPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showTeacherPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              {teacherErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {teacherErrors.password}
                </p>
              )}
            </div>

            <div className="border-t border-gray-300 mt-6 pt-6 text-center">
              <button
                onClick={handleTeacherLogin}
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded"
              >
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
              onClick={() => setShowBuyBookModal(false)}
              className="absolute top-3 right-3 bg-sky-500 text-white w-10 h-10 rounded flex items-center justify-center text-2xl"
            >
              ×
            </button>
            <div>
              <h2 className="text-[#1f4e79] text-3xl font-semibold mb-6 text-center">
                Dear Visitor
              </h2>
              <p className="text-gray-700 text-[17px] leading-8 text-center">
                Thank you for visiting TUK Publications.
                <br />
                To purchase books online, kindly write to us at{" "}
                <span className="font-bold text-black">
                  publications@tukworld.com
                </span>{" "}
                or WhatsApp us at{" "}
                <span className="font-bold text-black">9368705302</span>.
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
