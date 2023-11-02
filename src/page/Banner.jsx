import React from "react";

const Banner = () => {
  return (
    <div className="md:py-32 ">
      <div className=" flex items-center px-7 flex-col lg:flex-row-reverse m-auto gap-8">
        <div className="md:h-[500px] md:w-[1000px] bg-slate-300 flex-1 mt-6">
            <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" w-full h-full object-cover"
            />
        </div>
        <div className="flex-1">
          <h1 className="md:text-5xl text-2xl font-bold">Elevate Your Space: Expert Cleaning Services at Your Doorstep</h1>
          <p className="py-6">
          Welcome to Cleaning , where pristine cleanliness meets exceptional service. We are dedicated to transforming your space into a spotless haven, leaving no corner untouched. With our expert team and top-notch cleaning solutions, experience a new level of hygiene and freshness that redefines clean.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
