import React from 'react';
import logo from '../../assets/logo_white.png';

const Home = () => {
  return (
    <div className="bg-[#141414] w-full h-screen flex justify-start items-center relative">
      <div className="text-[#FFFFFF] pl-10">
      <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl" style={{ lineHeight: 0.10 }}>
        <h1 className="font-extrabold">
          <span className="font-bohemian">JOÃO</span><br />
          <span className="flex items-center font-bohemian">
            CARLOS
            <img src={logo} alt="Logo" className="h-24 sm:h-28 md:h-36 lg:h-40 relative -top-6" />
          </span>
        </h1>
        <h2>PORTFOLIO</h2>
      </div>
       
      </div>

      <h3 className="font-normal text-[#FFFFFF] pl-10 absolute bottom-10 w-full">
        Discover your way and move forward.
      </h3>
    </div>
  );
};

export default Home;
