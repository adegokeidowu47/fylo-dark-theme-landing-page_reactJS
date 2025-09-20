import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const HamberMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      e.stopPropagation();
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        ref={buttonRef}
        className='right-5 top-5 text-3xl cursor-pointer text-white flex md:hidden'
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu */}
      {isOpen && (
        <div
          id='close'
          ref={menuRef}
          className='flex flex-col items-center justify-center space-y-16 text-[18px] bg-[#333] py-10 px-8 text-3xl md:bg-none md:hidden absolute w-[90%] h-auto top-30 right-6'
        >
          <NavLink
            to='/*'
            className='text-lightGray hover:text-white'
            onClick={() => setIsOpen(false)}
          >
            Features
          </NavLink>
          <NavLink
            to='/*'
            className='text-lightGray hover:text-white'
            onClick={() => setIsOpen(false)}
          >
            Team
          </NavLink>
          <NavLink
            to='/*'
            className='text-lightGray hover:text-white'
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </NavLink>
        </div>
      )}
    </>
  );
};

export default HamberMenu;
