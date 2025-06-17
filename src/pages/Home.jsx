import React from 'react';
import Banner from '../components/Banner';
import Courses from '../components/Courses';
import PopularCourses from '../components/PopularCourses';


const Home = () => {
  return (
    <div>
      <title>Course Hub</title>
      <Banner></Banner>
      <Courses></Courses>
      <PopularCourses></PopularCourses>
      
    </div>
  );
};

export default Home;