import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthProvider';
import Loading from './Loading';


const MyEnrolledCourses = () => {
    const {user} = useContext(AuthContext);
  const [enrollments, setEnrollments] = useState([]);
   const [loading,setLoading] = useState(true);
  

  useEffect(() => {
    if(user){
      axios.get(`https://assignment-11-server-seven-nu.vercel.app/enroll/user/${user.email}`)
      .then(res => {
        setEnrollments(res.data);
        setLoading(false)
      });
    }
  }, [user]);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this enrollment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!"
    }).then(result => {
      if (result.isConfirmed) {
        axios.delete(`https://assignment-11-server-seven-nu.vercel.app/enroll/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Enrollment has been removed.", "success");
              setEnrollments(enrollments.filter(e => e.enrollmentId !== id));
            }
          });
      }
    });
  };

   if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="max-w-5xl mx-auto my-10">
      <title>Enrolled-Course</title>
      <h2 className="text-3xl font-bold mb-6">My Enrolled Courses</h2>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Duration</th>
            <th>Seats</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map(course => (
            <tr key={course.enrollmentId}>
              <td>{course.title}</td>
              <td>{course.duration}</td>
              <td>{course.seats}</td>
              <td>
                <button className="btn btn-error btn-sm" onClick={() => handleRemove(course.enrollmentId)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyEnrolledCourses;