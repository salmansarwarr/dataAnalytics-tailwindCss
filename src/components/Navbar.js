import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Compnay</li>
                <li className="p-4">Recources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            {nav ? <AiOutlineClose className="md:hidden" size={20} onClick={handleNav}/> : <AiOutlineMenu className="md:hidden" size={20} onClick={handleNav}/>}
            <div className={nav ? "fixed left-0 top-0 h-full bg-[#000300] w-[60%] border-r-gray-900 ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 mt-7">REACT.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Compnay</li>
                    <li className="p-4 border-b border-gray-600">Recources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4 border-b border-gray-600">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
