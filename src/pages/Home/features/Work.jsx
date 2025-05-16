import LineSteps from "../../../components/LineSteps"

const HowItWorks = () => {
  return (
    <div className="bg-[#fff9d6] py-[5rem] px-4 md:px-8 lg:px-16 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm font-normal OpenSans"><span className="h-[0.3125rem] rounded-[0.46875rem] w-[2rem] bg-black inline-block mb-2 mr-1"></span> Work Process</p>
            </div>
            <h2 className="text-4xl font-semibold Montserrat">How It Works?</h2>
          </div>
          <div className="">
            <p className="text-sm text-[#0B1411B2] OpenSans max-w-xl leading-relaxed tracking-normal">
              Getting started is easy! Just create your profile, explore local job listings that match your interests, and apply with a click. Whether you're looking to earn extra cash or gain real-world experience, KiwiRoo helps you connect with safe, trusted opportunities near you.
            </p>
          </div>
        </div>
        <div className="md:mt-16 mt-10 relative">
          <LineSteps />
          <div className="flex justify-center mt-5 md:mt-16 lg:mt-32">
            <button className="bg-black cursor-pointer  OpenSans text-[#FFEA99] px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
