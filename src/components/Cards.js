import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-300">
                    <img
                        className="w-20 mt-[-3rem] mx-auto bg-white"
                        src={Single}
                        alt=""
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Single User
                    </h2>
                    <p className="text-4xl text-center font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">
                            500 GB Storage
                        </p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00d99a] text-black w-[180px] sm:w-[200px] rounded-md mx-auto my-6 py-2 sm:py-3">
                        Start Trial
                    </button>
                </div>
                <div className="w-full bg-gray-100 shadow-xl flex flex-col rounded-lg p-4 my-8 md:my-0 hover:scale-105 duration-300">
                    <img
                        className="w-20 mt-[-3rem] mx-auto bg-white"
                        src={Double}
                        alt=""
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Single User
                    </h2>
                    <p className="text-4xl text-center font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">
                            500 GB Storage
                        </p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-black text-[#00d99a] w-[180px] sm:w-[200px] rounded-md mx-auto my-6 py-2 sm:py-3">
                        Start Trial
                    </button>
                </div>
                <div className="w-full shadow-xl flex flex-col rounded-lg p-4 mt-4 hover:scale-105 duration-300">
                    <img
                        className="w-20 mt-[-3rem] mx-auto bg-white"
                        src={Triple}
                        alt=""
                    />
                    <h2 className="text-2xl font-bold text-center py-8">
                        Single User
                    </h2>
                    <p className="text-4xl text-center font-bold">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">
                            500 GB Storage
                        </p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                    </div>
                    <button className="bg-[#00d99a] text-black w-[180px] sm:w-[200px] rounded-md mx-auto my-6 py-2 sm:py-3">
                        Start Trial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
