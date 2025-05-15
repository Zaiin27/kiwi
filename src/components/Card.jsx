import React from 'react';

const Card = ({ icon, value, description, bgColor }) => {
  return (
    <div
      className="flex items-center p-2 sm:p-3 rounded-lg bg-opacity-80"
      style={{ backgroundColor: bgColor }} // Use inline style for bgColor
    >
      <div className="mr-2">
        <img src={icon} alt={description} />
      </div>
      <div>
        <h3 className="text-white Montserrat text-[1.3rem] md:text-[1.5rem] lg:text-[1.75rem] font-semibold">{value}</h3>
        <p className="text-white Montserrat text-[1rem] md:text-[0.8rem] lg:text-[0.875rem] font-medium ">{description}</p>
      </div>
    </div>
  );
};

export default Card;