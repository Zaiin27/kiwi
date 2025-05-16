import React from 'react';

const Card = ({ icon, value, description, bgColor }) => {
  return (
    <div
      className="flex items-center p-2  rounded-lg bg-opacity-80   w-full max-w-[35rem]"
      style={{ backgroundColor: bgColor }} 
    >
      <div className="mr-3">
        <img src={icon} alt={description} />
      </div>
      <div className="flex-1">
        <h3 className="text-white Montserrat text-[1.3rem] md:text-[1.5rem] lg:text-[1.75rem] font-semibold">{value}</h3>
        <p className="text-white Montserrat text-[1rem] md:text-[0.8rem] lg:text-[0.875rem] font-medium ">{description}</p>
      </div>
    </div>
  );
};

export default Card;