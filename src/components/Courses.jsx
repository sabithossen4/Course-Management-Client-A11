import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Loading from "../pages/Loading";
import { FaBookmark, FaUser, FaStar, FaBook } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import Container from "./Container";

const Courses = () => {
  const [latestCourses, setLatestCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://assignment-11-server-seven-nu.vercel.app/latest-courses")
      .then((res) => {
        setLatestCourses(res.data);
        setLoading(false);
      })
      .catch((error) => toast.error("Failed to fetch courses"));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <Container>
        <h1 className="text-[#202124] text-4xl font-bold mb-2">
          Our Trending Courses
        </h1>
        <div className="flex gap-2 mb-4">
          <button className="bg-[#1E88E5] p-1 px-2 rounded-2xl"></button>
          <button className="bg-[#1E88E5] p-1 px-4 rounded-2xl"></button>
        </div>
        <p className="text-[#3f5264] text-[16px] font-medium mb-12">
          Explore courses by category and discover your learning path
        </p>

        <div className="w-full">
          <Swiper
            loop={true}
            spaceBetween={24}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
          >
            {latestCourses.map((course, i) => (
              <SwiperSlide key={i}>
                <div
                  key={course._id}
                  className=" group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Image Section with Badges */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-md text-sm font-semibold">
                        Featured
                      </span>
                    </div>

                    {/* Bookmark Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-400 p-2 rounded-md">
                        <FaBookmark className="text-white" />
                      </div>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-3xl font-bold drop-shadow-lg">
                        ${course.price || 600}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm font-semibold">
                        {course.category || "Marketing"}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {course.shortDescription?.slice(0, 80)}...
                    </p>

                    {/* Statistics Section */}
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-blue-500" />
                        <span>Students</span>
                        <span className="font-semibold">
                          {course.enrolledStudents || 800}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaStar className="text-blue-500" />
                        <span>Ratings</span>
                        <span className="font-semibold">
                          {course.rating || 5.0}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaBook className="text-blue-500" />
                        <span>Lessons</span>
                        <span className="font-semibold">
                          {course.totalLessons || 20}
                        </span>
                      </div>
                    </div>

                    {/* Instructor Section */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            course.instructorImage ||
                            "https://i.pravatar.cc/150?img=1"
                          }
                          alt={course.instructorName}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-semibold text-gray-800">
                          {course.instructorName || "James Collins"}
                        </span>
                      </div>

                      <Link
                        to={`/coursedetails/${course._id}`}
                        className="lg:inline-block relative text-lg group   py-3 transition-all"
                      >
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out   rounded-lg group-hover:text-[#1E88E5]  border-2 hover:border-[#1E88E5]">
                          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#1E88E5] text-[#1E88E5]"></span>
                          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                          <span className="relative font-bold">
                            View Details
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
