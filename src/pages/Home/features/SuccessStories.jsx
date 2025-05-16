// import React, { useState } from 'react';
// import { successStories } from '../../../utils/data.js';
// import { map } from '../../../assets/images/image.js';
// import { leftarrow1, profileimg, rightarrow1 } from '../../../assets/icons/icons.js';

// const SuccessStories = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % successStories.length);
//   };

//   const currentStory = successStories[currentIndex];
//   const profileImages = [profileimg, profileimg];

//   return (
//     <section className="bg-[#FFF7C9] py-16  md:pl-28"> 
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-sm font-normal OpenSans text-[#06110C] md:mb-1 mb-0.5">
//           <span className="h-[0.16rem] w-6 bg-black inline-block mb-2 mr-1"></span>User Queries
//         </div>
//         <div className="flex flex-col md:flex-row items-center gap-6">
//           <div className="w-full md:w-5/12"> {/* Reduced width from 1/2 to 5/12 */}
//               <h3 className="lg:text-[2.75rem] md:text-[2rem] text-[2rem] mb-4 Montserrat font-semibold">{currentStory.title}</h3>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <p className="text-[0.875rem] leading-6 mb-4 OpenSans text-[#06110CB2]">{currentStory.content}</p>
//               <div className="flex bg-white items-center gap-2">
//                 <img src={profileImages[currentIndex]} alt={currentStory.author} className="w-10 h-10 rounded-full" />
//                 <div>
//                   <span className="text-[1.125rem] font-bold text-gray-800 Montserrat">{currentStory.author}</span>
//                   <div className="text-[0.875rem] text-gray-600 poppin">{currentStory.position}</div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex md:justify-start justify-center mt-4 space-x-2">
//               <button
//                 onClick={handlePrev}
//                 className="w-7 h-7  cursor-pointer bg-[#F8FAFF] rounded flex items-center justify-center border "
//               >
//                 <img src={leftarrow1} alt="Previous" className="w-3 h-3" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="w-7 h-7 cursor-pointer bg-[#06110C] rounded flex items-center justify-center border "
//               >
//                 <img src={rightarrow1} alt="Next" className="w-3 h-3" />
//               </button>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 md:ml-10 md:mb-20">
//             <div className="text-center">
//               <img src={map} alt="World Map" className="max-w-full w-[28.25rem] h-[21.9375rem] mx-auto" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;

import React, { useState } from 'react';
import { successStories } from '../../../utils/data.js';
import { map } from '../../../assets/images/image.js';
import { leftarrow1, profileimg, rightarrow1 } from '../../../assets/icons/icons.js';

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  const currentStory = successStories[currentIndex];
  const profileImages = [profileimg, profileimg];

  return (
    <section className="bg-[#FFF7C9] py-16 md:pl-28"> 
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-sm font-normal OpenSans text-[#06110C] md:mb-10 lg:mb-0 ">
          <span className="h-[0.3125rem] rounded-[0.46875rem] w-[2rem] bg-black inline-block mb-2 mr-1"></span>User Queries
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-5/12 md:-mt-16">
            <h3 className="lg:text-[2.75rem] md:text-[2rem] text-[2rem] mb-2 Montserrat font-semibold">{currentStory.title}</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-[0.875rem] leading-6 mb-4 OpenSans text-[#06110CB2]">{currentStory.content}</p>
              <div className="flex bg-white items-center gap-2">
                <img src={profileImages[currentIndex]} alt={currentStory.author} className="w-10 h-10 rounded-full" />
                <div>
                  <span className="text-[1.125rem] font-bold text-gray-800 Montserrat">{currentStory.author}</span>
                  <div className="text-[0.875rem] text-gray-600 poppin">{currentStory.position}</div>
                </div>
              </div>
            </div>
            <div className="flex md:justify-start justify-center mt-4 space-x-2">
              <button
                onClick={handlePrev}
                className="w-7 h-7 cursor-pointer bg-[#F8FAFF] rounded flex items-center justify-center border"
              >
                <img src={leftarrow1} alt="Previous" className="w-3 h-3" />
              </button>
              <button
                onClick={handleNext}
                className="w-7 h-7 cursor-pointer bg-[#06110C] rounded flex items-center justify-center border"
              >
                <img src={rightarrow1} alt="Next" className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:ml-10 md:mb-20">
            <div className="text-center">
              <img src={map} alt="World Map" className="max-w-full w-[28.25rem] h-[21.9375rem] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;