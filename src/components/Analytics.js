import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img
                    src={Laptop}
                    className="w-[500px] mx-auto my-4"
                    alt="laptop"
                ></img>
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">
                        DATA ANALYTICS DASHBOARD
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
                        Manage Data Analytics certainly
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, exercitationem deserunt eveniet perspiciatis
                        ad labore rem natus animi fuga corrupti nemo veritatis
                        odit fugiat eos excepturi libero pariatur fugit aut?
                    </p>
                    <button
                        className='bg-black text-[#00d99a] w-[180px] sm:w-[200px] rounded-md mx-auto md:mx-0 my-6 py-2 sm:py-3'
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
