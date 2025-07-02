import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthProvider';
import Loading from './Loading';
import axios from 'axios';

const MyEnrolledCourses = () => {
  const { user } = useContext(AuthContext);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      axios
        .get(`https://assignment-11-server-seven-nu.vercel.app/enroll/user/${user.email}`)
        .then((res) => {
          setEnrollments(res.data);
          setLoading(false);
        });
    }
  }, [user]);

  const handleRemove = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to remove this enrollment?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://assignment-11-server-seven-nu.vercel.app/enroll/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Enrollment has been removed.', 'success');
              setEnrollments(enrollments.filter((e) => e.enrollmentId !== id));
            }
          });
      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-5xl mx-auto my-10 mt-28 px-4">
      <title>Enrolled-Course</title>
      <div className="max-w-full">
        <h2 className="text-3xl font-bold mb-10 text-center">My Enrolled Courses</h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-slate-900 text-white text-left">
                <th className="border-y border-gray-300 px-6 py-4 text-sm">Title</th>
                <th className="border-y border-gray-300 px-6 py-4 text-sm">Duration</th>
                <th className="border-y border-gray-300 px-6 py-4 text-sm">Seats</th>
                <th className="border-y border-gray-300 px-6 py-4 text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((course) => (
                <tr
                  key={course.enrollmentId}
                  className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
                >
                  <td className="border-y border-gray-300 px-6 py-4">{course.title}</td>
                  <td className="border-y border-gray-300 px-6 py-4">{course.duration}</td>
                  <td className="border-y border-gray-300 px-6 py-4">{course.seats}</td>
                  <td className="border-y border-gray-300 px-6 py-4">
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleRemove(course.enrollmentId)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledCourses;
