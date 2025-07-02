import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from './../context/AuthProvider';
import { Link } from 'react-router';  
import Loading from './Loading';

const ManageCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://assignment-11-server-seven-nu.vercel.app/courses?email=${user.email}`)
        .then((res) => {
          setCourses(res.data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://assignment-11-server-seven-nu.vercel.app/courses/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire('Deleted!', 'Your course has been deleted.', 'success');
            setCourses(courses.filter((course) => course._id !== id));
          }
        });
      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto my-10 mt-28 px-4">
      <title>Manage-Course</title>
      <div className="max-w-full">
        <h2 className="text-4xl font-bold mb-8 text-center">Manage Your Courses</h2>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-slate-900 text-white text-left">
                <th className="border-y border-gray-300 px-6 py-4 text-sm">Title</th>
                <th className="border-y border-gray-300 px-6 py-4 text-sm">Description</th>
                <th className="border-y border-gray-300 px-6 py-4 text-sm">Duration</th>
                <th className="border-y border-gray-300 px-6 py-4 text-sm">Seats</th>
                <th className="border-y border-gray-300 px-6 py-4 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr
                  key={course._id}
                  className="hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
                >
                  <td className="border-y border-gray-300 px-6 py-4">{course.title}</td>
                  <td className="border-y border-gray-300 px-6 py-4">{course.shortDescription}</td>
                  <td className="border-y border-gray-300 px-6 py-4">{course.duration}</td>
                  <td className="border-y border-gray-300 px-6 py-4">{course.seats}</td>
                  <td className="border-y border-gray-300 px-6 py-4">
                    <div className="flex gap-2">
                      <Link to={`/editcourse/${course._id}`} className="btn btn-primary btn-sm">
                        Edit
                      </Link>
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => handleDelete(course._id)}
                      >
                        Delete
                      </button>
                    </div>
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

export default ManageCourses;
