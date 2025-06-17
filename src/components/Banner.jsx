import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Zoom } from 'react-awesome-reveal';

const Banner = () => {
  return (
    <div>      
      <div className="mx-auto h-[800px]">
      <Swiper modules={[Navigation]} navigation loop={true} className="h-full">

        {/* Slide 1 */}
        <SwiperSlide>
          <Zoom triggerOnce className="h-full bg-cover bg-center bg-[url('/a1.avif')]">
            <div className="p-6 rounded-md text-left  pl-24 pt-32  bg-opacity-40 h-full">
              <h2 className="text-6xl font-bold mb-3">Master Web Development</h2>
              <p className="mb-4 py-10 text-xl">
                Learn Fullstack Development with real-world projects.
              </p>
              <a href="#_" className="relative inline-block text-lg group">
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
            <div className="p-6 rounded-md text-left pl-24 pt-32  bg-opacity-40 h-full">
              <h2 className="text-6xl font-bold mb-3">Become a Data Scientist</h2>
              <p className="mb-4 py-10 text-xl">
                Hands-on Machine Learning and Data Analysis courses.
              </p>
              <a href="#_" className="relative inline-block text-lg group">
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
            <div className="p-6 rounded-md text-left text-white pl-24 pt-32  bg-opacity-40 h-full">
              <h2 className="text-6xl font-bold mb-3">UI/UX Design Bootcamp</h2>
              <p className="mb-4 py-10 text-xl">
                Design beautiful interfaces with modern tools.
              </p>
              <a href="#_" className="relative inline-block text-lg group">
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
    </div>
  );
};

export default Banner;
