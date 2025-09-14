import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const HamberMenu = () => {
   
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);



    useEffect( () => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && buttonRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
                console.log(setIsOpen(false));   
                alert('hello, open')             
            };
        };

            document.addEventListener('mousedown', handleClickOutside);

            document.removeEventListener('mousedown', handleClickOutside);

    }, []);

    const toggleMenu = () => {
      console.log( setIsOpen(isOpen));
        alert('hello')
        // document.getElementById('close').classList.toggle('hidden');
    }

  return (
    <>
        <button onClick={toggleMenu} ref={buttonRef} className="right-5 top-5 text-3xl cursor-pointer text-white flex md:hidden" >
            <FaBars />
        </button>
        {isOpen && (<div id="close" className="hidden container w-[90%]  h-auto absolute flex-col justify-between items-center top-30 right-6" ref={menuRef}>
            <div className="flex flex-col items-center justify-center space-y-16 text-[18px] bg-[#333] py-10 px-8 text-3xl md:bg-none md:hidden">
                <NavLink to="/*" className="text-lightGray hover:text-white">Features</NavLink>
                <NavLink to="/*" className="text-lightGray hover:text-white">Team</NavLink>
                <NavLink to="/*" className="text-lightGray hover:text-white">Sign In</NavLink>
            </div>
        </div>) }
        
    </>
  )
}

export default HamberMenu;