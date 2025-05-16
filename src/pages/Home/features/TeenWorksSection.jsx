import React from 'react';
import { backteenimg } from '../../../assets/images/image'; // Replace with your actual image path

const TeenWorksSection = () => {
  return (
    <div
      className="w-full py-6 md:py-8 lg:py-10 bg-cover rounded-tl-3xl bg-center  flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16"
      style={{ backgroundImage: `url(${backteenimg})` }}
    >
      
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-white text-2xl md:text-2xl Montserrat lg:text-[2.1rem] md:ps-8 font-bold mb-4">
          Ready to Join <br className="hidden md:block" />
          <span className='lg:text-[2.5rem] md:text-[2rem] text-[2rem]'>Future Of Teen Works?</span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center md:pl-9 gap-3 md:gap-4">
          <button className="bg-[#FFEA99] cursor-pointer OpenSans text-black font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full w-[11rem] ">
            Signup As Teen
          </button>
          <button className="bg-white OpenSans cursor-pointer hover:bg-gray-100 text-black font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full w-[11.5rem] ">
            Signup As Parent
          </button>
        </div>
      </div>


      <div className="flex items-center">
        <button className="border-2 cursor-pointer OpenSans border-[#FFEA99] hover:text-black text-[#FFEA99] font-semibold py-2 px-6 md:py-[0.6rem] md:px-10 rounded-full w-full sm:w-auto">
          Post a job
        </button>
      </div>
    </div>
  );
};

export default TeenWorksSection;