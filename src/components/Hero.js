import React from "react";
import Typed from "react-typed";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">
                    GROWING WITH DATA ANALYTICS
                </p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                    Grow with data.
                </h1>
                <div className="flex justify-center items-center">
                    <p className="text-[1rem] sm:text-4xl lg:text-5xl font-bold py-4">
                        Fats, flexible financing for
                    </p>
                    <Typed
                        className="text-[1rem] sm:text-4xl lg:text-5xl font-bold pl-1 sm:pl-2 md:pl-4"
                        strings={["BTB", "BTC", "SASS"]}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className="font-bold text-[1rem] text-gray-500 sm:text-xl md:text-2xl">
                    Moniter your data analytics to increase revenue for BTB, BTC
                    and SASS platforms.
                </p>
                <button className="bg-[#00d99a] text-black w-[180px] sm:w-[200px] rounded-md mx-auto my-6 py-2 sm:py-3">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Hero;
