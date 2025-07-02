import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Zoom } from 'react-awesome-reveal';

const Banner = () => {
  return (
    <div className="mx-auto h-[600px] sm:h-[700px] lg:h-[800px]">
      <Swiper modules={[Navigation]} navigation loop={true} className="h-full">

        {/* Slide 1 */}
        <SwiperSlide>
          <Zoom triggerOnce className="h-full bg-cover bg-center bg-[url('/a1.avif')]">
            <div className="p-4 sm:p-6 md:p-12 pl-4 md:pl-12 lg:pl-24 pt-0 md:pt-32 h-full text-white bg-opacity-40">
              {/* Text visible from md and up */}
              <div className="hidden md:block">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 leading-tight">
                  Master Web Development 
                </h2>
                <p className="mb-4 py-4 text-base md:text-lg lg:text-xl max-w-xl">
                  Learn Fullstack Development with real-world projects.
                </p>
              </div>
              {/* Button visible only on lg */}
              <a href="#_" className="hidden lg:inline-block relative text-lg group mt-4">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-amber-200 text-white"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-bold">Participate</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
              </a>
            </div>
          </Zoom>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Zoom triggerOnce className="h-full bg-cover bg-center bg-[url('/a2.avif')]">
            <div className="p-4 sm:p-6 md:p-12 pl-4 md:pl-12 lg:pl-24 pt-0 md:pt-32 h-full text-white bg-opacity-40">
              <div className="hidden md:block">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 leading-tight">
                  Become a Data Scientist
                </h2>
                <p className="mb-4 py-4 text-base md:text-lg lg:text-xl max-w-xl">
                  Hands-on Machine Learning and Data Analysis courses.
                </p>
              </div>
              <a href="#_" className="hidden lg:inline-block relative text-lg group mt-4">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-amber-200 text-white"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-bold">Participate</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
              </a>
            </div>
          </Zoom>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Zoom triggerOnce className="h-full bg-cover bg-center bg-[url('/a3.avif')]">
            <div className="p-4 sm:p-6 md:p-12 pl-4 md:pl-12 lg:pl-24 pt-0 md:pt-32 h-full text-white bg-opacity-40">
              <div className="hidden md:block">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 leading-tight">
                  UI/UX Design Bootcamp
                </h2>
                <p className="mb-4 py-4 text-base md:text-lg lg:text-xl max-w-xl">
                  Design beautiful interfaces with modern tools.
                </p>
              </div>
              <a href="#_" className="hidden lg:inline-block relative text-lg group mt-4">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-amber-200 text-white"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-bold">Participate</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"></span>
              </a>
            </div>
          </Zoom>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
