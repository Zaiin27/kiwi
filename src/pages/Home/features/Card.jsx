

  import React, { useState } from 'react';
import { cardData } from '../../../utils/data';
import { dog, baby, home, rightarrow } from '../../../assets/icons/icons';

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const indices = [
    currentIndex,
    (currentIndex + 1) % cardData.length,
    (currentIndex + 2) % cardData.length,
  ];

  return (
    <div className="relative w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {indices.map((index) => {
          const card = cardData[index];
          let image;

          if (index === 0) image = dog;
          else if (index === 1) image = baby;
          else if (index === 2) image = home;

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-[0.75rem] shadow-lg text-center "
              style={{ width: '18rem', height: '17rem' }} // Explicit width and height in rem
            >
              <div className="flex justify-center mb-3">
                <img
                  src={image}
                  alt={card.title}
                  className="w-22 h-22"
                />
              </div>
              <h3 className="text-[1.375rem] Montserrat font-bold mb-2">{card.title}</h3>
              <p className="text-[#0B1411B2] OpenSans text-[1rem]">{card.description}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 cursor-pointer top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
      >
        <img src={rightarrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Card;