

import React from 'react';
import { walking } from '../../../assets/images/image';
import { tick } from '../../../assets/icons/icons';

const JobPostingAccess = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#FFF7C9] px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 w-full min-h-[auto] mx-auto">
     
      <div className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-4 py-4">
        <h2 className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2 font-['Open_Sans'] text-[#06110C] flex items-center justify-center md:justify-start">
        <span className="h-[0.3125rem] rounded-[0.46875rem] w-[2rem] bg-black inline-block mb-2 mr-1"></span> Job Posting Access
        </h2>
        <h1 className="text-xl max-w-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-4 font-['Montserrat'] leading-tight mx-auto md:mx-0">
          Who Can Post a Job? 
        </h1>
        <p className="text-[#06110CB2] text-xs lg:text-base md:text-sm font-['Open_Sans'] mb-4 leading-relaxed max-w-[34rem] mx-auto md:mx-0">
          To ensure a safe and verified environment, only users who register as Employers can post jobs on KiwiRo. Whether you're a busy parent, a local business, or just need a helping hand.
        </p>
        <ul className="space-y-2 font-semibold md:space-y-2 text-left text-black font-['Open_Sans'] text-xs sm:text-sm md:text-sm max-w-prose mx-auto md:mx-0">
          <li className="flex items-center">
            <span className="mr-2 flex-shrink-0"><img src={tick} alt="Tick icon" className="w-4 h-4 sm:w-5 sm:h-5" /></span> 
            Register with an Employer account
          </li>
          <li className="flex items-center">
            <span className="mr-2 flex-shrink-0"><img src={tick} alt="Tick icon" className="w-4 h-4 sm:w-5 sm:h-5" /></span> 
            Post tasks like dog walking or babysitting
          </li>
          <li className="flex items-center">
            <span className="mr-2 flex-shrink-0"><img src={tick} alt="Tick icon" className="w-4 h-4 sm:w-5 sm:h-5" /></span> 
            View applicants and manage offers
          </li>
          <li className="flex items-center">
            <span className="mr-2 flex-shrink-0"><img src={tick} alt="Tick icon" className="w-4 h-4 sm:w-5 sm:h-5" /></span> 
            Pay securely via Stripe (escrow)
          </li>
        </ul>
      </div>

   
      <div className="lg:w-[37.5rem] md:w-[28rem] mt-4 sm:mt-6 md:mt-0 px-2 sm:px-4 py-4">
        <img
          src={walking}
          alt="Person walking a dog"
          className="rounded-lg w-[37.5rem] h-auto object-cover mx-auto"
        />
      </div>
    </div>
  );
};

export default JobPostingAccess; 