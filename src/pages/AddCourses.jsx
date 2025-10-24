import React, { useContext, useState } from 'react';
import { AuthContext } from './../context/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddCourses = () => {
    const { user } = useContext(AuthContext);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddCourse = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Prepare course data
        const courseData = {
            title: data.title,
            shortDescription: data.shortDescription,
            image: imagePreview || data.image,
            duration: data.duration,
            seats: parseInt(data.seats),
            enrolledCount: 0,
            email: user?.email,
            name: user?.displayName,
            createdAt: new Date()
        };

        console.log(courseData);

        axios.post('https://assignment-11-server-seven-nu.vercel.app/courses', courseData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Course added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                    setImagePreview(null);
                    setImageFile(null);
                }
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to add course!",
                });
            })
    };

    return (
        <div className=' bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4'>
            <title>Add_Courses</title>
            
            <div className='max-w-4xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-12'>
                    <div className='inline-block'>
                        <h2 className='text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-3'>
                            Create New Course
                        </h2>
                        <div className='h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full'></div>
                    </div>
                    <p className='text-gray-600 mt-4 text-lg'>Share your knowledge with the world</p>
                </div>

                {/* Form Card */}
                <div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-100'>
                    <form onSubmit={handleAddCourse} className='space-y-8'>

                        {/* Course Title */}
                        <div className='group'>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Course Title
                            </label>
                            <input 
                                type="text" 
                                name="title" 
                                placeholder="e.g., Advanced React Development" 
                                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-300 group-hover:border-gray-300" 
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
                                placeholder="Describe what students will learn in this course..." 
                                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:bg-white focus:outline-none transition-all duration-300 resize-none group-hover:border-gray-300" 
                                rows="5" 
                                required 
                            />
                        </div>

                        {/* Image Upload Section */}
                        <div className='group'>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Course Image
                            </label>
                            
                            <div className='grid md:grid-cols-2 gap-6'>
                                {/* Image Upload */}
                                <div>
                                    <input 
                                        type="file" 
                                        id="imageUpload"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                    <label 
                                        htmlFor="imageUpload"
                                        className="flex flex-col items-center justify-center w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-dashed border-purple-300 rounded-xl cursor-pointer hover:from-purple-200 hover:to-pink-200 transition-all duration-300 group-hover:border-purple-400"
                                    >
                                        {imagePreview ? (
                                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                                        ) : (
                                            <div className='text-center'>
                                                <svg className="w-12 h-12 text-purple-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <p className="text-sm font-semibold text-purple-600">Click to upload image</p>
                                                <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                                            </div>
                                        )}
                                    </label>
                                </div>

                                {/* Or Image URL */}
                                <div className='flex flex-col justify-center'>
                                    <p className='text-center text-sm font-semibold text-gray-500 mb-3'>OR</p>
                                    <input 
                                        type="url" 
                                        name="image" 
                                        placeholder="Paste image URL here" 
                                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300" 
                                    />
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
                                <input 
                                    type="text" 
                                    name="duration" 
                                    placeholder="e.g., 8 weeks, 40 hours" 
                                    className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all duration-300 group-hover:border-gray-300" 
                                    required 
                                />
                            </div>

                            {/* Total Seats */}
                            <div className='group'>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Available Seats
                                </label>
                                <input 
                                    type="number" 
                                    name="seats" 
                                    className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-300 group-hover:border-gray-300" 
                                    defaultValue={10} 
                                    min="1"
                                    required 
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className='w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 mt-8'
                        >
                            <span className='flex items-center justify-center gap-2'>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                Add Course
                            </span>
                        </button>
                    </form>
                </div>

                {/* Decorative Elements */}
                <div className='absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
                <div className='absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
                <div className='absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
            </div>
        </div>
    );
};

export default AddCourses;