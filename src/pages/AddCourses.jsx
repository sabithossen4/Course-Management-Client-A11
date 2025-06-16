import React, { useContext } from 'react';
import { AuthContext } from './../context/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddCourses = () => {
    const { user } = useContext(AuthContext);

    const handleAddCourse = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Prepare course data
        const courseData = {
            title: data.title,
            shortDescription: data.shortDescription,
            image: data.image,
            duration: data.duration,
            seats: parseInt(data.seats),
            enrolledCount: 0,
            email: user?.email,
            name: user?.displayName,
            createdAt: new Date()
        };

        console.log(courseData);

         axios.post('https://assignment-11-server-seven-nu.vercel.app/courses', courseData)
         .then(res =>{         
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Course added successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            }
            })
        .catch (error =>{
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to add course!",
            });
          })
        
    };

    return (
        <div className='max-w-3xl mx-auto my-10'>
            <title>Add_Courses</title>
            <h2 className='text-4xl font-bold mb-8 text-center'>Add New Course</h2>

            <form onSubmit={handleAddCourse} className='space-y-6'>

                {/* Course Title */}
                <div>
                    <label className="label">Course Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Course Title" 
                        className="input input-bordered w-full" 
                        required 
                    />
                </div>

                {/* Short Description */}
                <div>
                    <label className="label">Short Description</label>
                    <textarea 
                        name="shortDescription" 
                        placeholder="Description" 
                        className="textarea textarea-bordered w-full" 
                        rows="4" 
                        required 
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="label">Image URL</label>
                    <input 
                        type="url" 
                        name="image" 
                        placeholder="Image URL" 
                        className="input input-bordered w-full" 
                        required 
                    />
                </div>

                {/* Duration */}
                <div>
                    <label className="label">Duration</label>
                    <input 
                        type="text" 
                        name="duration" 
                        placeholder="Duration" 
                        className="input input-bordered w-full" 
                        required 
                    />
                </div>

                {/* Total Seats */}
                <div>
                    <label className="label">Total Seats</label>
                    <input 
                        type="number" 
                        name="seats" 
                        className="input input-bordered w-full" 
                        defaultValue={10} 
                        required 
                    />
                </div>

                <button type="submit" className='btn btn-primary w-full'>Add Course</button>
            </form>
        </div>
    );
};

export default AddCourses;