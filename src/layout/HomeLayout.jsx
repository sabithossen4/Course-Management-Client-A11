import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../pages/Loading';

const HomeLayout = () => {
  const {state} = useNavigation();
  return (
    <div >
      <div >
        <header><Navbar></Navbar> </header>
      </div>
     <div >
      <main className='min-h-[calc(100vh-340px)] mt-16'> {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>   } </main>
     
     </div>
     <footer><Footer></Footer></footer>
    </div>
  );
};

export default HomeLayout;