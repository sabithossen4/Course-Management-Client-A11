import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router';
import Loading from './Loading';

const EditCourse = () => {
  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading,setLoading] = useState(true);

  // Fetch course by ID
  useEffect(() => {
    axios.get(`http://localhost:3000/courses/${id}`)
      .then(res => {
        setCourse(res.data);
        setLoading(false)
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!course) return <p className="text-center text-lg">Loading...</p>;

  const handleUpdateCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedSeats = parseInt(form.seats.value);

    // Validation: seats can't be less than enrolled students
    if (updatedSeats < course.enrolledCount) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Seats!',
        text: `Total seats cannot be less than enrolled students (${course.enrolledCount})`,
      });
      return;
    }

    const updatedCourse = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      image: form.image.value,
      duration: form.duration.value,
      seats: updatedSeats,
      enrolledCount: course.enrolledCount, 
    };

    axios.patch(`http://localhost:3000/courses/${id}`, updatedCourse)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Course Updated!',
            timer: 1500
          });
          navigate('/managecourses');
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Failed to update course.'
        });
      });
  };

   if(loading){
    return <Loading></Loading>
  }

  return (
    <div className='max-w-3xl mx-auto my-10'>
      <title>EditCourse</title>
      <h2 className='text-4xl font-bold mb-8 text-center'>Edit Course</h2>

      <form onSubmit={handleUpdateCourse} className='space-y-6'>

        <div>
          <label className="label">Course Title</label>
          <input type="text" name="title" defaultValue={course.title} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label">Short Description</label>
          <textarea name="shortDescription" defaultValue={course.shortDescription} className="textarea textarea-bordered w-full" rows="4" required />
        </div>

        <div>
          <label className="label">Image URL</label>
          <input type="url" name="image" defaultValue={course.image} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label">Duration</label>
          <input type="text" name="duration" defaultValue={course.duration} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label">Total Seats</label>
          <input type="number" name="seats" defaultValue={course.seats} className="input input-bordered w-full" required />
        </div>

        <button type="submit" className='btn btn-primary w-full'>Update Course</button>
      </form>
    </div>
  );
};

export default EditCourse;
