import React, { useEffect} from "react";
import AOS from "aos";

const Mainpara = ({}) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="bg-black text-white duration-300 ">
      <div className="container min-h-[620px] flex relative top-8 left-6">
          <div className="space-y-5 pt-24 lg:pl-28 xl:pl-60 2xl:pl-80 place-items-center justify-items-center text-center ">
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Projects of Passion
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="text-primary py-3 text-2xl font-mono " >
             WITH HOURS OF HARDWORK AND DEDICATION
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="1500"
              className="rounded-md text-white transition duration-500 px-6 text-xl font-mono"
            >
              we've created automotive engineering marvels over and over
            </p>
          </div>
      </div>
    </div>
  );
};

export default Mainpara;