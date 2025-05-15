
// import React from 'react';
// import { whyjoin } from '../../../assets/images/image';
// import { statsData } from '../../../utils/data';
// import Card from '../../../components/Card';

// const WhyJoinKiwi = () => {
//   return (
//     <div className="relative w-full py-8 sm:py-12 md:py-16 lg:py-24">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${whyjoin})` }}
//       ></div>

//       {/* Lightened Overlay */}
//       <div className="absolute inset-0 z-0 max-w-7xl bg-gradient-to-r from-black via-black/30 to-transparent"></div>

//       <div className="relative max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
//         {/* Left Side: Content with Overlay Behind */}
//         <div className="w-full lg:w-1/2 relative ml-6 sm:ml-8">
//           {/* Content (Above Overlay) */}
//           <div className="relative z-10 p-4 sm:p-6 lg:p-8">
//             {/* Content (Above Overlay) */}
//             <div className="text-left">
//               {/* Header Section */}
//               <p className="text-white text-xs OpenSans sm:text-sm font-normal mb-1 sm:mb-2">
//                 <span className="h-[0.16rem] w-6 bg-white inline-block mb-2 mr-1 "></span>Built For Safety, Simplicity, And Real Results
//               </p>
//               <h1 className="text-white Montserrat text-xl md:text-[2.75rem] font-semibold mb-2 sm:mb-3">
//                 Why Join KiwiRoo?
//               </h1>
//               <p className="text-white OpenSans text-xs sm:text-sm md:text-base mb-4 sm:mb-6 max-w-xl">
//                 Whether you're a teen looking to earn, a parent ensuring safety, or someone hiring reliable help — KiwiRoo is built to support every step of the journey.
//               </p>

//               {/* Statistic Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md">
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

// import React from 'react';
// import { whyjoin } from '../../../assets/images/image';
// import { statsData } from '../../../utils/data';
// import Card from '../../../components/Card';

// const WhyJoinKiwi = () => {
//   return (
//     <div className="relative w-full py-8 sm:py-12 md:py-16 lg:py-24">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${whyjoin})` }}
//       ></div>

//       {/* Lightened Overlay */}
//       <div className="absolute inset-0 z-0 max-w-7xl bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

//       <div className="relative max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
//         {/* Left Side: Content with Overlay Behind */}
//         <div className="w-full lg:w-1/1 relative md:ml-10">
//           {/* Content (Above Overlay) */}
//           <div className="relative z-10 p-4 sm:p-6 lg:p-8">
//             {/* Content (Above Overlay) */}
//             <div className="text-left">
//               {/* Header Section */}
//               <p className="text-white text-xs OpenSans sm:text-sm font-normal mb-1 sm:mb-2">
//                 <span className="h-[0.16rem] w-6 bg-white inline-block mb-2 mr-1 "></span>Built For Safety, Simplicity, And Real Results
//               </p>
//               <h1 className="text-white Montserrat text-xl md:text-[2.75rem] font-semibold mb-2 sm:mb-3">
//                 Why Join KiwiRoo?
//               </h1>
//               <p className="text-white OpenSans text-xs  md:text-sm mb-4 sm:mb-6 max-w-[33rem]">
//                 Whether you're a teen looking to earn, a parent ensuring safety, or someone hiring reliable help — KiwiRoo is built to support every step of the journey.
//               </p>

//               {/* Statistic Cards */}
//               <div className="grid grid-cols-1  sm:grid-cols-2 gap-3 sm:gap-4 max-w-[25rem]">
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

      {/* Lightened Overlay */}
      <div className="absolute inset-0 z-0 max-w-7xl bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
        {/* Left Side: Content with Overlay Behind */}
        <div className="w-full lg:w-1/1 relative md:ml-10">
          <div className="relative z-10 p-4 sm:p-6 lg:p-8">
            <div className="text-left">
              <p className="text-white text-xs OpenSans sm:text-sm font-normal mb-1 sm:mb-2">
                <span className="h-[0.16rem] w-6 bg-white inline-block mb-2 mr-1"></span>Built For Safety, Simplicity, And Real Results
              </p>
              <h1 className="text-white Montserrat md:py-0 py-1 text-2xl md:text-[2.75rem] font-semibold mb-2 sm:mb-3">
                Why Join KiwiRoo?
              </h1>
              <p className="text-white OpenSans text-xs md:text-sm mb-4 sm:mb-6 max-w-[33rem]">
                Whether you're a teen looking to earn, a parent ensuring safety, or someone hiring reliable help — KiwiRoo is built to support every step of the journey.
              </p>

              {/* Statistic Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  md:mt-10 max-w-[25rem] z-20">
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