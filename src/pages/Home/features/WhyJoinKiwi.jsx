

// import React from 'react';
// import { whyjoin } from '../../../assets/images/image';
// import { statsData } from '../../../utils/data';
// import Card from '../../../components/Card';

// const WhyJoinKiwi = () => {
//   return (
//     <div className="relative w-full py-8 sm:py-12 md:py-16 lg:py-24">
    
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${whyjoin})` }}
//       ></div>

      
//       <div className="absolute inset-0 z-0 max-w-7xl bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

//       <div className="relative max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
        
//         <div className="w-full lg:w-1/1 relative md:ml-10">
//           <div className="relative z-10 p-4 sm:p-6 lg:p-8">
//             <div className="text-left">
//               <p className="text-white text-xs OpenSans sm:text-sm font-normal mb-1 sm:mb-2">
//               <span className="h-[0.3125rem] rounded-[0.46875rem] w-[2rem] bg-white inline-block mb-2 mr-1"></span>Built For Safety, Simplicity, And Real Results
//               </p>
//               <h1 className="text-white Montserrat md:py-0 py-1 text-2xl md:text-[2.75rem] font-semibold mb-2 sm:mb-3">
//                 Why Join KiwiRoo?
//               </h1>
//               <p className="text-white OpenSans text-xs md:text-[1rem] mb-4 sm:mb-6 max-w-[36rem]">
//                 Whether you're a teen looking to earn, a parent ensuring safety, or someone hiring reliable help — KiwiRoo is built to support every step of <br className='md:block hidden'/> the journey.
//               </p>

             
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  md:mt-14 max-w-[25rem] z-20">
//                 {statsData.map((stat, index) => (
//                   <Card
//                     key={index}
//                     icon={stat.icon}
//                     value={stat.value}
//                     description={stat.description}
//                     bgColor={stat.bgColor}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyJoinKiwi;


import React from 'react';
import { whyjoin } from '../../../assets/images/image';
import { statsData } from '../../../utils/data';
import Card from '../../../components/Card';

const WhyJoinKiwi = () => {
  return (
    <div className="relative w-full py-8 sm:py-12 md:py-16 lg:py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${whyjoin})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 max-w-7xl mx-auto bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 flex flex-col items-center">
        <div className="w-full relative md:ml-10">
          <div className="relative z-10 p-4 sm:p-6 lg:p-8">
            <div className="text-left">
              <p className="text-white text-xs OpenSans sm:text-sm font-normal mb-1 sm:mb-2">
                <span className="h-[0.3125rem] rounded-[0.46875rem] w-[2rem] bg-white inline-block mb-2 mr-1"></span>
                Built For Safety, Simplicity, And Real Results
              </p>
              <h1 className="text-white Montserrat md:py-0 py-1 text-2xl md:text-[2.75rem] font-semibold mb-2 sm:mb-3">
                Why Join KiwiRoo?
              </h1>
              <p className="text-white OpenSans text-xs md:text-[1rem] mb-4 sm:mb-6 max-w-[36rem]">
                Whether you're a teen looking to earn, a parent ensuring safety, or someone hiring reliable help — KiwiRoo is built to support every step of <br className="md:block hidden" /> the journey.
              </p>

              {/* Cards Grid: 2 Columns with Spacing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-14 max-w-[26rem]">
                {statsData.map((stat, index) => (
                  <Card
                    key={index}
                    icon={stat.icon}
                    value={stat.value}
                    description={stat.description}
                    bgColor={stat.bgColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinKiwi;