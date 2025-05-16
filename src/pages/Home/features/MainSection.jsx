import React from 'react';
import Card from './Card';
import { background } from '../../../assets/images/image';

const MainSection = () => {
  return (
    <div className="relative " >
      <img 
        src={background} 
        alt="background" 
        className="absolute top-0 left-0 w-full h-[60%] md:h-[60%] lg:h-[90%] lg:-mt-[5rem] object-cover -z-1"
      />
      <section
        id="features"
        className="relative flex flex-col items-center justify-center text-center px-4 py-6 sm:py-8 md:pt-16 md:py-6"
      >
        <p className="text-black pt-5 text-sm OpenSans font-normal mb-3">
        <span className="h-[0.3125rem] rounded-[0.46875rem] w-[2rem] bg-black inline-block mb-2 mr-1"></span>Best Jobs Place
        </p>
        <h1 className="text-black Montserrat text-3xl md:text-[3] lg:text-[3.6rem] font-bold mb-4">
            Helping Teens to<br />
            <span className="inline-block text-[90%] md:ml-3 md:text-[3.6rem]">Find Jobs</span>
          </h1>
        <p className="text-[#06110CB2] OpenSans font-normal text-sm md:pt-[0.9rem] mb-5 max-w-xl mx-auto">
          Each month, more than 3 million job seekers turn to website in their search for work, making over 1400 applications every single day
        </p>
        <div className="flex gap-[0.5rem] md:pt-1 mb-12">
          <button className="bg-black text-[#FFEB9A] px-4 sm:px-6 py-2 rounded-full hover:bg-gray-800 transition-colors cursor-pointer OpenSans font-semibold">
            Get Started
          </button>
          <button className="border-[0.13rem] cursor-pointer OpenSans font-semibold border-black text-black px-4 sm:px-6 py-2 rounded-full transition-colors">
            Contact Us
          </button>
        </div>
        <div className="w-full max-w-5xl mx-auto md:pt-[1.9rem]">
          <Card />
        </div>
      </section>
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#fff9d6] -z-2"
        style={{ clipPath: 'inset(calc(100% - 70%) 0 0 0)' }}
      ></div>
    </div>
  );
};

export default MainSection;

