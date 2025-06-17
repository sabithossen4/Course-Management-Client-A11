import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Loading from '../pages/Loading';

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://assignment-11-server-seven-nu.vercel.app/courses')
      .then(res => {    
        const sortedCourses = res.data.sort((a, b) => (b.enrolledCount || 0) - (a.enrolledCount || 0));
        setCourses(sortedCourses.slice(0, 6)); 
        setLoading(false);
      })
      .catch(error => toast.error("Failed to fetch courses"));
  }, []);
   if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="max-w-7xl mx-auto my-12">      
      <h2 className="text-3xl font-bold text-center mb-8">Popular Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course._id} className="bg-pink-100 card  shadow-xl">
            <figure>
              <img src={course.image} alt={course.title} className="h-56 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p>{course.shortDescription?.slice(0, 60)}...</p>
              <p><strong>Enrollments:</strong> {course.enrolledCount || 0}</p>
              <div className="card-actions justify-end">
                <Link to={`/coursedetails/${course._id}`} className="btn btn-primary btn-sm">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PopularCourses;