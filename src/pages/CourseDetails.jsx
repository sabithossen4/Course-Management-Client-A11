import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthProvider';
import { useParams } from 'react-router';
import Loading from './Loading';

const CourseDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [course, setCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch course data & enrollment status
  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseRes = await axios.get(`http://localhost:3000/courses/${id}`);
        setCourse(courseRes.data);        

        if (user?.email) {
          const enrollRes = await axios.get(`http://localhost:3000/enroll/user/${user.email}`);
          const enrolledCourse = enrollRes.data.find(c => c._id === id);
          if (enrolledCourse) {
            setIsEnrolled(true);
            setEnrollmentId(enrolledCourse.enrollmentId);            
          }
        }
      } catch (err) {
        console.error(err);
        Swal.fire('Error!', 'Something went wrong while loading course details.', 'error');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, user?.email]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!course) return <p className="text-center text-lg text-red-500">Course not found</p>;

  const seatsLeft = course.seats - (course.enrolledCount || 0);

  const handleToggleEnroll = async () => {
    if (!user) {
      Swal.fire('Please login to enroll.');
      return;
    }

    try {
      if (!isEnrolled) {
        // Enroll logic
        await axios.post('http://localhost:3000/enroll', {
          courseId: course._id,
          userEmail: user.email
        });

        Swal.fire({
          icon: 'success',
          title: 'Enrolled Successfully!',
          timer: 1500
        });

        setIsEnrolled(true);
        refreshCourse();
      } else {
        // Unenroll logic
        await axios.delete(`http://localhost:3000/enroll/${enrollmentId}`);

        Swal.fire({
          icon: 'success',
          title: 'Enrollment removed!',
          timer: 1500
        });

        setIsEnrolled(false);
        refreshCourse();
      }
    } catch (err) {
      Swal.fire('Failed!', err.response?.data?.message || 'Something went wrong!', 'error');
    }
  };

  const refreshCourse = async () => {
    const res = await axios.get(`http://localhost:3000/courses/${id}`);
    setCourse(res.data);
  };  
   if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-lime-900 shadow-md rounded-lg">
      <title>Course-Details</title>
      <img src={course.image} alt={course.title} className="w-full h-96 object-cover rounded-md mb-6" />
      <h2 className="text-4xl font-bold mb-4 text-white">{course.title}</h2>
      <p className="mb-4 text-gray-300">{course.shortDescription}</p>

      <div className="grid grid-cols-2 gap-4 mb-4 text-white">
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Total Seats:</strong> {course.seats}</p>
        <p><strong>Enrolled Count:</strong> {course.enrolledCount || 0}</p>
        <p><strong>Seats Left:</strong> {seatsLeft}</p>
        <p><strong>Created At:</strong> {new Date(course.createdAt).toLocaleDateString()}</p>
      </div>

      {seatsLeft > 0 || isEnrolled ? (
        <button className={`btn ${isEnrolled ? 'btn-error' : 'btn-primary'}`} onClick={handleToggleEnroll}>
          {isEnrolled ? 'Remove Enrollment' : 'Enroll Now'}
        </button>
      ) : (
        <button className="btn btn-disabled">No seats left</button>
      )}
    </div>
  );
};

export default CourseDetails;
