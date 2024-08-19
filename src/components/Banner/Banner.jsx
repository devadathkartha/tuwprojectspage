import React from "react";
import Aos from "aos";

const Banner = () => {
  return (
    <div className="container mb-0">
      <div className="bg-primary rounded-lg relative bottom-44">
      <div
        className=" text-white py-10 sm:min-h-[400px] flex justify-center items-center rounded-2xl"
      >
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
              WANT TO SEE MORE OF OUR AWESOMENESS?
            </h1>
          </div>
          <div>
            <button data-aos="fade-up" className="bg-white text-black text-center px-5 py-3 rounded-l-xl font-mono hover:bg-black hover:text-white transition duration-600">
            VIEW OUR GALLERY
            </button>
            
          </div>
        
      </div>
      </div>
    </div>
  );
};

export default Banner;
