import React from 'react';
import Banner from '../components/Banner';
import Courses from '../components/Courses';
import PopularCourses from '../components/PopularCourses';
import Additional from '../components/Additional';


const Home = () => {
  return (
    <div>
      <title>Course Hub</title>
      <div className='max-w-[1600px] mx-auto '>
        <Banner></Banner>
      </div>
      <div className='my-32'>
        <Courses></Courses>
      </div>
      <div>
        <PopularCourses></PopularCourses>
      </div>
      <div>
        <Additional></Additional>
      </div>
      
    </div>
  );
};

export default Home;