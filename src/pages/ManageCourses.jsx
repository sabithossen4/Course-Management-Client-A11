import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from './../context/AuthProvider';
import { Link } from 'react-router';
import Loading from './Loading';


const ManageCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios.get(`https://assignment-11-server-seven-nu.vercel.app/courses?email=${user.email}`)
        .then(res => {
          setCourses(res.data)
          setLoading(false)
         })
        .catch(err => console.error(err));
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
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://assignment-11-server-seven-nu.vercel.app/courses/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your course has been deleted.', 'success');
              setCourses(courses.filter(course => course._id !== id));
            }
          });
      }
    });
  }
  if(loading){
    return <Loading></Loading>
  }

  return (
    <div className='max-w-7xl mx-auto my-10 mt-28'>
      <title>Manage-Course</title>
      <div className='max-w-11/12 mx-auto'>
        <h2 className='text-4xl font-bold mb-8 text-center'>Manage Your Courses</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Seats</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course._id}>
                <td>{course.title}</td>
                <td>{course.shortDescription}</td>
                <td>{course.duration}</td>
                <td>{course.seats}</td>
                <td>
                 <Link to={`/editcourse/${course._id}`} className='btn btn-warning btn-sm mr-2'>Edit</Link>
                  <button className='btn btn-error btn-sm' onClick={() => handleDelete(course._id)}>Delete</button>
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