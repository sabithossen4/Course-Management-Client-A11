import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import { useParams } from "react-router";
import Loading from "./Loading";
import Container from "../components/Container";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaClock,
  FaUsers,
  FaCalendarAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";

const CourseDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseRes = await axios.get(
          `https://assignment-11-server-seven-nu.vercel.app/courses/${id}`
        );
        setCourse(courseRes.data);

        if (user?.email) {
          const enrollRes = await axios.get(
            `https://assignment-11-server-seven-nu.vercel.app/enroll/user/${user.email}`
          );
          const enrolledCourse = enrollRes.data.find((c) => c._id === id);
          if (enrolledCourse) {
            setIsEnrolled(true);
            setEnrollmentId(enrolledCourse.enrollmentId);
          }
        }
      } catch (err) {
        Swal.fire("Error!", "Failed to load course details.", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, user?.email]);

  if (loading) return <Loading />;
  if (!course)
    return <p className="text-center text-lg text-red-500">Course not found.</p>;

  const seatsLeft = course.seats - (course.enrolledCount || 0);

  const handleToggleEnroll = async () => {
    if (!user) {
      Swal.fire("Please login to enroll.");
      return;
    }

    try {
      if (!isEnrolled) {
        await axios.post(
          "https://assignment-11-server-seven-nu.vercel.app/enroll",
          {
            courseId: course._id,
            userEmail: user.email,
          }
        );
        Swal.fire({
          icon: "success",
          title: "Enrolled Successfully!",
          timer: 1500,
        });
        setIsEnrolled(true);
        refreshCourse();
      } else {
        await axios.delete(
          `https://assignment-11-server-seven-nu.vercel.app/enroll/${enrollmentId}`
        );
        Swal.fire({
          icon: "success",
          title: "Enrollment Removed!",
          timer: 1500,
        });
        setIsEnrolled(false);
        refreshCourse();
      }
    } catch (err) {
      Swal.fire(
        "Failed!",
        err.response?.data?.message || "Something went wrong!",
        "error"
      );
    }
  };

  const refreshCourse = async () => {
    const res = await axios.get(
      `https://assignment-11-server-seven-nu.vercel.app/courses/${id}`
    );
    setCourse(res.data);
  };

  return (
    <div className="bg-gray-50  text-gray-800">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            {course.title}
          </motion.h1>
          <p className="text-gray-600 mt-3 text-lg">{course.shortDescription}</p>
        </div>
      </div>

      {/* Main Content */}
      <Container>
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-white shadow-md rounded-2xl p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              About This Course
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {course.longDescription ||
                "This course offers an in-depth understanding of modern skills with practical hands-on learning experience designed for both beginners and professionals."}
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Course Information
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-3">
              <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl shadow-sm">
                <FaClock className="text-blue-500 text-2xl mb-1" />
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl shadow-sm">
                <FaUsers className="text-purple-500 text-2xl mb-1" />
                <p className="text-sm text-gray-600">Seats</p>
                <p className="font-semibold">
                  {course.enrolledCount || 0}/{course.seats}
                </p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl shadow-sm">
                <FaUserGraduate className="text-green-500 text-2xl mb-1" />
                <p className="text-sm text-gray-600">Seats Left</p>
                <p className="font-semibold">{seatsLeft}</p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl shadow-sm">
                <FaCalendarAlt className="text-pink-500 text-2xl mb-1" />
                <p className="text-sm text-gray-600">Created</p>
                <p className="font-semibold">
                  {new Date(course.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="mt-10 bg-gray-100 p-6 rounded-xl flex items-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300">
                <img
                  src={
                    course.instructorImg ||
                    "https://i.ibb.co.com/7tDd5wP/default-teacher.jpg"
                  }
                  alt="Instructor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <FaChalkboardTeacher className="text-blue-600" />
                  {course.instructor || "Unknown Instructor"}
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Expert in {course.category || "Professional Training"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Section (Enroll Card) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                Enroll This Course
              </h3>
              <p className="text-gray-600 mb-6">
                Start your learning journey today!
              </p>
              <p className="text-3xl font-bold text-blue-600 mb-6">
                ${course.price || 99}
              </p>
            </div>

            {seatsLeft > 0 || isEnrolled ? (
              <button
                onClick={handleToggleEnroll}
                className={`w-full py-3 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 ${
                  isEnrolled
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {isEnrolled ? "Remove Enrollment" : "Enroll Now"}
              </button>
            ) : (
              <button
                disabled
                className="w-full py-3 rounded-xl bg-gray-400 text-white font-semibold cursor-not-allowed"
              >
                No Seats Left
              </button>
            )}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default CourseDetails;
