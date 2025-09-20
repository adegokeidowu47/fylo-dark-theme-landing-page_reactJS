import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarker,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import FyloLogo from '../assets/images/logo.svg';
import iconEmail from '../assets/images/icon-email.svg';
import iconPhone from '../assets/images/icon-phone.svg';

const Footer = () => {
  return (
    <footer className='bg-footerBg -mt-30'>
      <div className='w-[90%] lg:w-[85%] mx-auto px-10 lg:px-20 pt-50 pb-10 lg:pb-20'>
        <img
          src={FyloLogo}
          alt='company_logo'
          className='w-[100px] lg:w-[150px] h-auto'
        />
        <div className='flex flex-col lg:flex-row justify-between gap-12 mt-10'>
          <div className='flex flex-col gap-10 lg:max-w-sm'>
            <div className='text-lightGray flex gap-4 text-sm lg:text-base'>
              <NavLink
                to='/*'
                className='text-lightGray ml-4 text-sm lg:text-base hover:text-red-400'
              >
                <FaMapMarker size={24} className='flex-shrink-0 mt-1' />
              </NavLink>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex items-center'>
                <img src={iconPhone} alt='Phone' className='w-[20px] h-auto' />
                <NavLink
                  to='/*'
                  className='text-lightGray ml-4 text-sm lg:text-base hover:text-white'
                >
                  +1-543-123-4567
                </NavLink>
              </div>
              <div className='flex items-center'>
                <img src={iconEmail} alt='Email' className='w-[22px] h-auto' />
                <NavLink
                  to='/*'
                  className='text-lightGray ml-4 text-sm lg:text-base hover:text-white'
                >
                  example@fylo.com
                </NavLink>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 sm:flex-row gap-16 text-sm lg:text-base'>
            <div className='flex flex-col space-y-4'>
              <NavLink to='/*' className='text-lightGray hover:text-white'>
                About Us
              </NavLink>
              <NavLink to='/*' className='text-lightGray hover:text-white'>
                Jobs
              </NavLink>
              <NavLink to='/*' className='text-lightGray hover:text-white'>
                Press
              </NavLink>
              <NavLink to='/*' className='text-lightGray hover:text-white'>
                Blog
              </NavLink>
            </div>
            <div className='flex flex-col space-y-4'>
              <NavLink to='/*' className='text-lightGray hover:text-white'>
                Contact Us
              </NavLink>
              <NavLink to='/*' className='text-lightGray hover:text-white'>
                Terms
              </NavLink>
              <NavLink to='/*' className='text-lightGray hover:text-white'>
                Privacy
              </NavLink>
            </div>
          </div>
          <div className='flex justify-center lg:justify-start gap-4'>
            <NavLink
              to='/*'
              className='text-lightGray hover:text-lightTeal transition-colors'
            >
              <FaFacebookF className='border border-white hover:border-lightTeal text-4xl p-2 rounded-full' />
            </NavLink>
            <NavLink
              to='/*'
              className='text-lightGray hover:text-lightTeal transition-colors'
            >
              <FaTwitter className='border border-white hover:border-lightTeal text-4xl p-2 rounded-full' />
            </NavLink>
            <NavLink
              to='/*'
              className='text-lightGray hover:text-lightTeal transition-colors'
            >
              <FaInstagram className='border border-white hover:border-lightTeal text-4xl p-2 rounded-full' />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
