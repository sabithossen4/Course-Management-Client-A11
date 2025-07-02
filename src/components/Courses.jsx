import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Loading from '../pages/Loading';

const Courses = () => {
const [latestCourses, setLatestCourses] = useState([]);
const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://assignment-11-server-seven-nu.vercel.app/latest-courses')
      .then(res => {
        setLatestCourses(res.data);
        setLoading(false);
      })
      .catch(error => toast.error("Failed to fetch courses"));
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  }
   if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="max-w-7xl mx-auto my-12">      
     <div className='max-w-11/12 mx-auto'>
       <h2 className="text-4xl font-bold mb-10 text-center">Latest Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestCourses.map(course => (
          <div key={course._id} className=" shadow-md rounded-lg p-4 border">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-sm text-gray-500 mb-2">Added on: {formatDate(course.createdAt)}</p>
            <p className="mb-4">{course.shortDescription.slice(0, 80)}...</p>

            <div className="flex justify-between items-center">
              <p><strong>Seats:</strong> {course.seats}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
            </div>

            <div className="mt-4 text-right">
              <Link to={`/coursedetails/${course._id}`} className="btn btn-primary">Details</Link>
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
};

export default Courses;