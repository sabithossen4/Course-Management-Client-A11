import React from "react";
import Container from "./Container";
import { FaSearchLocation } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const HeroSection = () => {
  return (
   <div className="w-full bg-[#1E88E5] relative py-12">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-5  pt-18 pb-12">
      <div className="col-span-1 md:col-span-3">
        <h1 className="font-bold text-[54px] text-white">
          Find the Perfect Course Near Your Location
        </h1>
        <h4 className="text-xl font-bold text-white">
          Own your future learning new skills online
        </h4>
        {/* search bar */}
        <div className="bg-blue-100 p-2 rounded-xl max-w-4xl mx-auto my-8">
          <div className="bg-white flex items-center justify-between rounded-lg overflow-hidden shadow-sm">
            {/* Left inputs */}
            <div className="flex flex-1 items-center divide-x">
              {/* Keyword input */}
              <div className="flex items-center gap-2 px-4 flex-1">
                <FiSearch className="text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Keyword / Course Name"
                  className="w-full outline-none text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* City input */}
              <div className="flex items-center gap-2 px-4 flex-1">
                <FaSearchLocation className="text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="City or Postalcode"
                  className="w-full outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Find button */}
            
            
            <button className="hidden lg:inline-block relative text-lg group  px-6 py-3 transition-all">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#1E88E5] transition-colors duration-300 ease-out   rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-yellow-400 text-white"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#1E88E5] group-hover:-rotate-180 ease"></span>
                  <span className="relative font-bold">Find Course</span>
                </span>
                
              </button>
          </div>
        </div>

        <div>
          <span className="text-[16px] font-bold text-white">Popular Search : </span>
          <span className="text-sm text-[#C1E2FF]">
            Designer, Developer Web, iOS, JavaScript{" "}
          </span>
        </div>
        <div className="grid grid-cols-4 text-white font-bold my-16">
          <div>
            <p className="text-3xl">265+</p>
            <p className="text-sm">Courses Added</p>
          </div>
          <div>
            <p className="text-3xl">12K</p>
            <p className="text-sm">Manager</p>
          </div>
          <div>
            <p className="text-3xl">15K</p>
            <p className="text-sm">Users Registered</p>
          </div>
          <div>
            <p className="text-3xl">23K</p>
            <p className="text-sm">Reviews From Users</p>
          </div>
        </div>
      </div>

      <div className=" hidden md:col-span-2  lg:block">
        <img className="w-[475px]" src="/hero.png" alt="" />
      </div>
    </div>
  </Container>

  {/* Wave SVG -  */}
 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    className="relative block w-full h-[150px]"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      d="M0,96 C0,96 240,224 720,224 C1200,224 1440,96 1440,96 L1440,320 L0,320 Z"
      className="fill-white"
    ></path>
  </svg>
</div>
</div>
  );
};

export default HeroSection;
