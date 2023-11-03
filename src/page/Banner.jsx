import React from "react";

const Banner = () => {
  return (
    <div className="md:py-32 ">
      <div className=" flex items-center px-7 flex-col lg:flex-row-reverse m-auto gap-8">
        
        <div className=" h-[500px] w-[500px] bg-slate-500mt-6 relative overflow-hidden shadow-2xl">
            <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover rounded-lg  "
            />
            {/* <div className="opacity-0 flex justify-center items-center group-hover:opacity-100 duration-300 absolute top-0 w-full h-full  text-black text-3xl font-bold"> 
             <h1 className="">Elevate Your Space</h1>
            </div> */}
        </div>
        <div className="flex-1">
          <h1 className="md:text-5xl text-2xl font-bold "><span className="font-black md:text-7xl text-green-500">Elevate Your Space</span> <br /> Expert Cleaning Services at Your Doorstep</h1>
          <p className="py-6">
          Welcome to Cleaning , where pristine cleanliness meets exceptional service. We are dedicated to transforming your space into a spotless haven, leaving no corner untouched. With our expert team and top-notch cleaning solutions, experience a new level of hygiene and freshness that redefines clean.
          </p>
          <div className="space-x-3"> 
            <button className="btn bg-green-500 hover:bg-slate-600 text-white ">Book A CLINING </button> 
            <button className="btn border-green-500  hover:bg-green-500 hover:text-white text-green-500 ">Read More </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
