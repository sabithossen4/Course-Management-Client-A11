import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router';
import Loading from './Loading';

const EditCourse = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

  // Fetch course by ID
  useEffect(() => {
    axios.get(`https://assignment-11-server-seven-nu.vercel.app/courses/${id}`)
      .then(res => {
        setCourse(res.data);
        setImagePreview(res.data.image);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return <Loading />;
  }

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
        confirmButtonColor: '#8b5cf6',
      });
      return;
    }

    const updatedCourse = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      image: imagePreview || form.imageUrl.value,
      duration: form.duration.value,
      seats: updatedSeats,
      enrolledCount: course.enrolledCount,
    };

    axios.patch(`https://assignment-11-server-seven-nu.vercel.app/courses/${id}`, updatedCourse)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Course Updated!',
            timer: 1500,
            confirmButtonColor: '#8b5cf6',
          });
          navigate('/managecourses');
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Failed to update course.',
          confirmButtonColor: '#ef4444',
        });
      });
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4'>
      <title>EditCourse</title>
      
      <div className='max-w-4xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <div className='inline-block'>
            <h2 className='text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3'>
              Edit Course
            </h2>
            <div className='h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full'></div>
          </div>
          <p className='text-gray-600 mt-4 text-lg'>Update your course information</p>
        </div>

        {/* Info Card */}
        <div className='bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-4 mb-8 border border-blue-200'>
          <div className='flex items-center gap-3'>
            <div className='bg-blue-500 rounded-full p-2'>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className='flex-1'>
              <p className='text-sm font-semibold text-blue-900'>
                Currently Enrolled: <span className='text-blue-600'>{course.enrolledCount}</span> students
              </p>
              <p className='text-xs text-blue-700'>Total seats must be greater than or equal to enrolled students</p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-100'>
          <form onSubmit={handleUpdateCourse} className='space-y-8'>

            {/* Course Title */}
            <div className='group'>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Course Title
              </label>
              <input 
                type="text" 
                name="title" 
                defaultValue={course.title}
                placeholder="Course Title" 
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300 group-hover:border-gray-300" 
                required 
              />
            </div>

            {/* Short Description */}
            <div className='group'>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Course Description
              </label>
              <textarea 
                name="shortDescription" 
                defaultValue={course.shortDescription}
                placeholder="Description" 
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:outline-none transition-all duration-300 resize-none group-hover:border-gray-300" 
                rows="5" 
                required 
              />
            </div>

            {/* Image Section */}
            <div className='group'>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Course Image
              </label>
              
              <div className='grid md:grid-cols-2 gap-6'>
                {/* Current/Preview Image */}
                <div>
                  <p className='text-xs text-gray-500 mb-2'>Current Image Preview</p>
                  <div className='relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-blue-200 rounded-xl overflow-hidden'>
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className='flex items-center justify-center h-full'>
                        <p className='text-sm text-gray-500'>No image</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Upload New Image */}
                <div>
                  <p className='text-xs text-gray-500 mb-2'>Upload New Image</p>
                  <input 
                    type="file" 
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label 
                    htmlFor="imageUpload"
                    className="flex flex-col items-center justify-center h-48 bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-dashed border-indigo-300 rounded-xl cursor-pointer hover:from-indigo-200 hover:to-purple-200 transition-all duration-300"
                  >
                    <svg className="w-12 h-12 text-indigo-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm font-semibold text-indigo-600">Click to upload</p>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                  </label>
                  
                  {/* Or URL Input */}
                  <div className='mt-4'>
                    <p className='text-center text-xs font-semibold text-gray-500 mb-2'>OR</p>
                    <input 
                      type="url" 
                      name="imageUrl" 
                      defaultValue={course.image}
                      placeholder="Paste image URL" 
                      className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-300 text-sm" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Duration and Seats Row */}
            <div className='grid md:grid-cols-2 gap-6'>
              {/* Duration */}
              <div className='group'>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Duration
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    name="duration" 
                    defaultValue={course.duration}
                    placeholder="Duration" 
                    className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-300 group-hover:border-gray-300" 
                    required 
                  />
                </div>
              </div>

              {/* Total Seats */}
              <div className='group'>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Available Seats
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <input 
                    type="number" 
                    name="seats" 
                    defaultValue={course.seats}
                    min={course.enrolledCount}
                    className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white focus:outline-none transition-all duration-300 group-hover:border-gray-300" 
                    required 
                  />
                </div>
                <p className='text-xs text-gray-500 mt-1'>
                  Minimum: {course.enrolledCount} (currently enrolled)
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4 pt-4'>
              <button 
                type="submit" 
                className='flex-1 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300'
              >
                <span className='flex items-center justify-center gap-2'>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Update Course
                </span>
              </button>
              <button 
                type="button"
                onClick={() => navigate('/managecourses')}
                className='px-8 py-4 bg-gray-200 text-gray-700 font-bold text-lg rounded-xl hover:bg-gray-300 transition-all duration-300'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
        <div className='absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>
    </div>
  );
};

export default EditCourse;