
import React, { useState } from 'react';
import { faqData } from '../../../utils/data';
import { gardening } from '../../../assets/images/image';
import { minus, plus } from '../../../assets/icons/icons';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col md:flex-row bg-[#FFEB9A] p-4 sm:p-6 md:p-10 min-h-screen items-center justify-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 mt-5 md:mb-0 order-1 md:order-none">
        <img
          src={gardening}
          alt="Person mowing lawn"
          className="w-[24rem] h-[18rem]  md:w-[31.25rem] md:h-[20rem] lg:h-[29rem] rounded-[1.875rem] object-cover"
        />
      </div>

      {/* FAQ Section */}
      <div className="w-full md:w-1/2 md:pl-10">
        <div className="text-sm font-normal OpenSans text-[#06110C] mb-2">
          <span className="h-[0.3rem] rounded-2xl w-6 bg-black inline-block mb-2 mr-1"></span>User Queries
        </div>
        <h2 className="text-2xl sm:text-3xl max-w-sm font-semibold mb-6 Montserrat">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full Montserrat   text-left p-4 bg-white hover:bg-gray-100 focus:outline-none flex justify-between items-center"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-sm sm:text-base">{faq.question}</span>
                <img
                  src={openIndex === index ? minus : plus}
                  alt={openIndex === index ? 'Collapse' : 'Expand'}
                  className="w-5 h-5"
                />
              </button>
              <div
                className={`relative bg-white OpenSans overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'h-auto opacity-100' : 'h-0 opacity-0'
                }`}
              >
                <p
                  className={`p-4 text-gray-600 text-sm sm:text-base transition-transform duration-300 ease-in-out ${
                    openIndex === index ? 'translate-y-0' : '-translate-y-4'
                  }`}
                  id={`faq-answer-${index}`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;