


import React from 'react'
import { linebackground } from '../assets/images/image'

const LineSteps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 relative">
    
    <div className="hidden lg:block absolute top-0 left-0 right-0 w-full h-full pointer-events-none">
      <img 
        src={linebackground}
        alt="Wavy line connecting steps" 
        className="w-full h-full object-contain translate-y-7"
      />
    </div>

  
    <div className="flex flex-col items-center text-center md:self-start  md:pt-0">
      <p className="text-sm font-bold Montserrat bg-[#06110C0D] p-[0.2rem] rounded-xl px-2 mb-2">STEP - 01</p>
      <h3 className="text-[1.25rem] font-bold mb-3 OpenSans">Sign Up & Create a Profile</h3>
      <p className="text-sm OpenSans text-[#0B1411B2]">Teens sign up, upload photo, verify <br /> ID (with parental approval)</p>
    </div>

    {/* Step 2 - Bottom Middle */}
    <div className="flex flex-col items-center text-center md:pt-16 lg:mt-0 lg:self-end md:pb-0 md:mt-16 lg:translate-y-18">
      <div className="w-5 h-5  hidden bg-black rounded-full -mt-4 mb-8 relative z-10"></div>
      <p className="text-sm font-bold Montserrat bg-[#06110C0D] p-[0.2rem] rounded-xl px-2 mb-2">STEP - 02</p>
      <h3 className="text-[1.25rem] font-bold mb-3 OpenSans">Browse Available Jobs</h3>
      <p className="text-sm OpenSans text-[#0B1411B2]">Browse listings for dog walking, <br /> babysitting, house sitting & more</p>
    </div>

    {/* Step 3 - Top Right */}
    <div className="flex flex-col items-center text-center md:self-start">
      <p className="text-sm font-bold Montserrat bg-[#06110C0D] p-[0.2rem] rounded-xl px-2 mb-2">STEP - 03</p>
      <h3 className="text-[1.25rem] font-bold mb-3 OpenSans">Apply & Get Hired</h3>
      <p className="text-sm text-[#0B1411B2] OpenSans">Use tokens to apply, connect with <br /> job posters, get approved</p>
    </div>
  </div>
  )
}

export default LineSteps