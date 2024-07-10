import React from "react";
import { Parallax } from 'react-parallax';

const GuestBanner = () => {
  return (
    <Parallax bgImage="https://www.finestwallpaper.com/uploads/5/7/7/9/5779447/s774058804322417752_p1199_i10_w2560.jpeg" strength={300}>
      <div className="relative w-full h-[600px] flex items-center justify-center grid-background">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-6xl sm:text-7xl font-semibold mb-4 font-satoshi">
            Welcome to Unicourse
          </h1>
          <p className="sm:text-xl mb-6 font-normal font-inter text-center w-1/2">
            "Explore a world of courses tailored just for you. Start your learning journey today and unlock new opportunities."
          </p>
          <button className="bg-transparent hover:bg-gray-500 text-white border border-white font-light py-2 px-6 rounded-full transition-all duration-300 font-inter w-72">
            Get Started
          </button>
        </div>
      </div>
    </Parallax>
  );
};

export default GuestBanner;
