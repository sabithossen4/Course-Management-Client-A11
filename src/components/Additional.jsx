import React from 'react';
import Testimonials from './Testimonials';
import UpcomingEvents from './UpcomingEvents';

const Additional = () => {
  return (
    <div className='mb-20'>
      <div className='my-32'>
        <Testimonials></Testimonials>
      </div>
      <UpcomingEvents></UpcomingEvents>
    </div>
  );
};

export default Additional;