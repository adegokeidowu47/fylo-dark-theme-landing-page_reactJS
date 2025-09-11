import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const HamberMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.getElementById('close').classList.toggle('hidden');
    }

  return (
    <>
        <button onClick={toggleMenu} className="right-5 top-5 text-3xl cursor-pointer text-white flex md:hidden" >
            { isOpen ? (<FaTimes />) : (<FaBars />) }
        </button>
        <div id="close" className="hidden container w-[90%]  h-auto absolute flex-col justify-between items-center bg-[#333] top-30 right-6 py-10 px-8 text-3xl md:bg-0">
            <div className="flex flex-col items-center justify-center space-y-16 text-[18px] md:hidden">
                <NavLink to="/*" className="text-lightGray hover:text-white">Features</NavLink>
                <NavLink to="/*" className="text-lightGray hover:text-white">Team</NavLink>
                <NavLink to="/*" className="text-lightGray hover:text-white">Sign In</NavLink>
            </div>
        </div>
    </>
  )
}

export default HamberMenu;