import React from 'react';
import { admin, peoples, verify } from '../../../assets/icons/icons';
import { round } from '../../../assets/images/image';

const SafetySection = () => {
  return (
    <div className="bg-[#FFEB9A] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
        {/* Left Section (Main Text and Stripe Verification) */}
        <div className="lg:w-1/3 flex flex-col justify-center space-y-4 sm:space-y-6 md:hidden lg:block">
          <div className="flex items-center mb-3 sm:mb-4">
            <p className="text-xs sm:text-sm font-normal uppercase text-[#06110C] OpenSans">
              <span className="h-[0.16rem] w-4 sm:w-6 bg-black inline-block mb-1 sm:mb-2 mr-2"></span>
              Safety + Trust Assurance
            </p>
          </div>
          <h1 className="text-xl lg:text-[2.59rem] font-semibold text-gray-900 mb-4 leading-tight font-['Montserrat']">
            Your Safety Is Our Priority
          </h1>
          <p className="text-[#06110CB2] mb-6 sm:mb-8 max-w-[27rem] OpenSans text-[0.9rem] mx-auto">
            We’ve built KiwiRoo from the ground up to be secure, transparent, and parent-approved. Every job, teen, and employer goes through layers of trust checks so you can focus on what matters.
          </p>

          {/* Stripe Verification */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <img src={verify} alt="Stripe Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <h3 className="text-[1.1rem] font-semibold text-gray-900 font-['Montserrat'] uppercase">Stripe ID Verification</h3>
              <p className="text-[#06110CB2] OpenSans text-[1rem] max-w-[18rem]">
                All users go through secure ID checks for extra peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* md: Main Text, Stripe Verification, and Image Row */}
        <div className="hidden md:flex md:w-full md:gap-6  lg:hidden">
          {/* Left Column: Main Text and Stripe Verification */}
          <div className="flex flex-col space-y-6 md:w-1/2 md:mt-20 md:text-center">
            {/* Safety + Trust Assurance */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-center">
                <p className="text-xs sm:text-sm font-normal uppercase text-[#06110C] OpenSans">
                  <span className="h-[0.16rem] w-4 sm:w-6 bg-black inline-block mb-1 sm:mb-2 mr-2"></span>
                  Safety + Trust Assurance
                </p>
              </div>
              <h1 className="text-xl font-semibold text-gray-900 leading-tight font-['Montserrat']">
                Your Safety Is Our Priority
              </h1>
              <p className="text-[#06110CB2] max-w-[27rem] mx-auto OpenSans text-[0.9rem]">
                We’ve built KiwiRoo from the ground up to be secure, transparent, and parent-approved. Every job, teen, and employer goes through layers of trust checks so you can focus on what matters.
              </p>
            </div>

            {/* Stripe Verification */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-center">
                <img src={verify} alt="Stripe Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <h3 className="text-[1.1rem] font-semibold text-gray-900 font-['Montserrat'] uppercase">Stripe ID Verification</h3>
                <p className="text-[#06110CB2] OpenSans text-[1rem] max-w-[18rem] mx-auto">
                  All users go through secure ID checks for extra peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center md:w-1/2">
            <div
              className="relative w-full max-w-[18rem] sm:max-w-[22rem] aspect-[3/4] overflow-hidden"
              style={{ borderRadius: '50% / 30%' }}
            >
              <img src={round} alt="Parent and Child" className="w-full h-full object-cover" />
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-[#FFEA99] px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[1.1rem] font-semibold OpenSans hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap">
                Read our safety Promise
              </div>
            </div>
          </div>
        </div>

        {/* Center Image (Hidden in md, Visible in lg) */}
        <div className="lg:w-1/3 flex justify-center md:hidden lg:flex">
          <div
            className="relative w-full max-w-[18rem] sm:max-w-[22rem] aspect-[3/4] overflow-hidden"
            style={{ borderRadius: '50% / 30%' }}
          >
            <img src={round} alt="Parent and Child" className="w-full h-full object-cover" />
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-[#FFEA99] px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[1.1rem] font-semibold OpenSans hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap">
              Read our safety Promise
            </div>
          </div>
        </div>

        {/* Right Section (Parental Approval, Escrow Payments, Admin Moderation) */}
        <div className="lg:w-1/3 flex flex-col justify-center space-y-4 sm:space-y-6">
          {/* Parental Approval */}
          <div className="flex flex-col space-y-2 md:hidden lg:block">
            <div className="flex items-center">
              <img src={verify} alt="Parental Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <h3 className="text-base md:text-[1.1rem] font-semibold text-gray-900 font-['Montserrat'] uppercase">
                Parental Approval Workflow
              </h3>
              <p className="text-[#06110CB2] OpenSans text-[1rem] max-w-xs">
                Teens can’t apply to any job until their parent gives the green light.
              </p>
            </div>
          </div>

          {/* Escrow Payments */}
          <div className="flex flex-col space-y-2 md:hidden lg:block">
            <div className="flex items-center">
              <img src={peoples} alt="Escrow Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <h3 className="text-base md:text-[1.1rem] font-semibold text-gray-900 font-['Montserrat'] uppercase">
                Escrow Payments via Stripe
              </h3>
              <p className="text-[#06110CB2] OpenSans text-[1rem] max-w-xs">
                Payments are held safely and only released once the job is complete.
              </p>
            </div>
          </div>

          {/* Admin Moderation */}
          <div className="flex flex-col space-y-2 md:hidden lg:block">
            <div className="flex items-center">
              <img src={admin} alt="Admin Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="max-w-[16rem]">
              <h3 className="text-base md:text-[1.1rem] font-semibold text-gray-900 font-['Montserrat'] uppercase">Admin Moderation</h3>
              <p className="text-[#06110CB2] OpenSans text-[1rem]">
                Our team monitors activity, flags disputes, and enforces community rules.
              </p>
            </div>
          </div>
        </div>

        {/* md: Three Sections in One Row (Below Image and Stripe) */}
        <div className="hidden md:flex md:w-full md:gap-6 lg:hidden">
          {/* Parental Approval */}
          <div className="flex flex-col space-y-2 md:w-1/3">
            <div className="flex items-center">
              <img src={verify} alt="Parental Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <h3 className="text-base md:text-[1.1rem] font-semibold text-gray-900 font-['Montserrat'] uppercase">
                Parental Approval Workflow
              </h3>
              <p className="text-[#06110CB2] OpenSans text-[1rem] max-w-xs">
                Teens can’t apply to any job until their parent gives the green light.
              </p>
            </div>
          </div>

          {/* Escrow Payments */}
          <div className="flex flex-col space-y-2 md:w-1/3">
            <div className="flex items-center">
              <img src={peoples} alt="Escrow Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <h3 className="text-base md:text-[1.1rem] font-semibold text-gray-900 font-['Montserrat'] uppercase">
                Escrow Payments via Stripe
              </h3>
              <p className="text-[#06110CB2] OpenSans text-[1rem] max-w-xs">
                Payments are held safely and only released once the job is complete.
              </p>
            </div>
          </div>

          {/* Admin Moderation */}
          <div className="flex flex-col space-y-2 md:w-1/3">
            <div className="flex items-center">
              <img src={admin} alt="Admin Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="max-w-[16rem]">
              <h3 className="text-base md:text-[1.1rem] font-semibold text-gray-900 font-['Montserrat'] uppercase">Admin Moderation</h3>
              <p className="text-[#06110CB2] OpenSans text-[1rem]">
                Our team monitors activity, flags disputes, and enforces community rules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySection;