import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import girl from './assets/girl.jpg';  

const Home = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/signup');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <main className="relative overflow-hidden h-[90vh] px-[7.5rem] py-8 mx-auto my-8 bg-white rounded-3xl shadow-lg md:w-3/4">
      <div className="absolute -top-7 left-1/2 transform translate-x-[10%] bg-indigo-500 w-24 h-8 rounded-md"></div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <img src={logo} alt='Logo' />
          <span className="ml-1 text-3xl font-bold" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>OWLEE</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center flex-grow">
            <span className="mx-4 cursor-pointer">The What</span>
            <span className="mx-4 cursor-pointer">The Why</span>
            <span className="mx-4 cursor-pointer">The How</span>
          </div>
          <div className="flex items-center">
            <span className="mr-4 cursor-pointer">Contact</span>
            <button onClick={goToProfile} className="px-8 py-2 font-bold text-white bg-indigo-500 hover:bg-indigo-700 rounded-3xl">PROFILE</button>
          </div>
        </div>
      </div>
      

      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
      
        <div className="flex-1 p-8 rounded-3xl">
          <h2 className="mt-40 text-lg font-extrabold text-indigo-500">NEW PLATFORM</h2>
          <h1 className='font-extrabold text-7xl'><span>Your Next</span><br /><span>Social Life.</span><br /></h1>
          <p className='mt-16 text-lg'>Your new Social Media Platform with stuff that actually matters.</p>

         
          <button onClick={goToSignup} className="px-8 py-2 mt-8 font-bold text-white bg-indigo-500 hover:bg-indigo-700 rounded-3xl">
            SIGN UP
          </button>
        </div>

       
        <div className="flex-1 p-8 rounded-3xl">
          <img src={girl} alt="Large" className="object-cover w-full h-full rounded-3xl" />
        </div>
      </div>

    </main>
  );
};

export default Home;
