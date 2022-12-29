import React from "react";

const NewsLetter = () => {
    return (
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>

                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input
                            className="p-2 rounded-md w-full sm:p-3"
                            type="email"
                            placeholder="Enter Email"
                        />
                        <button className="bg-[#00d99a] text-black w-[180px] sm:w-[200px] rounded-md ml-4 my-6 py-2 sm:py-3">
                            Notify me
                        </button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span></p>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
