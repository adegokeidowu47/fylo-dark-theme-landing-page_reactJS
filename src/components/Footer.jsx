import FyloLogo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import EmailLogo from "../assets/images/icon-email.svg";
import PhoneLogo from "../assets/images/icon-phone.svg";

const Footer = () => {
  return (
    <footer className="bg-footerBg -mt-30">
        <div className="w-[90%] lg:w-[100%] h-auto mx-auto px-10 lg:px-20 pt-50 pb-20 ">
            <img src={FyloLogo} alt="company_logo" className="w-[100px] h-auto lg:w-[150px]"/>
            <div className="flex flex-col justify-between lg:flex-row">
                <div className="flex flex-col gap-10 mt-10">
                    <div className="text-lightGray flex gap-4 text-[13px] lg:text-xl" >
                        <FaMapMarker size={28} />
                        <p className="w-md inline mr-2 lg:w-sm lg:text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="flex flex-col gap-y-8">
                        <div className="flex">
                            <img src={PhoneLogo} alt="Phone Image" className="w-[22px] h-auto" />
                            <p className="text-lightGray ml-4">+1-543-123-4567</p>
                        </div>
                        <div className="flex">
                            <img src={EmailLogo} alt="Email Image" className="w-[25px] h-auto" />
                            <p className="text-lightGray ml-4">example@fylo.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-y-20 gap-20 mt-15 text-sm lg:space-y-20  lg:-ml-30 lg: lg:mt-0">
                    <div className="flex flex-col items-start space-y-8">
                            <NavLink to="/*" className="text-lightGray hover:text-white">About Us</NavLink>
                            <NavLink to="/*" className="text-lightGray hover:text-white">Jobs</NavLink>
                            <NavLink to="/*" className="text-lightGray hover:text-white">Press</NavLink>
                            <NavLink to="/*" className="text-lightGray hover:text-white">Blog</NavLink>
                        </div>
                        <div className="flex flex-col items-start space-y-8">
                            <NavLink to="/*" className="text-lightGray hover:text-white">Contact Us</NavLink>
                            <NavLink to="/*" className="text-lightGray hover:text-white">Terms</NavLink>
                            <NavLink to="/*" className="text-lightGray hover:text-white">Privacy</NavLink>
                        </div>
                </div>
                <div className="flex gap-4 text-white justify-center items-center lg:justify-start lg:items-start">
                    <FaFacebookF className="border-1 border-amber-50 text-4xl p-2 rounded-full" />
                    <FaTwitter className="border-1 border-amber-50 text-4xl p-2 rounded-full" />
                    <FaInstagram  className="border-1 border-amber-50 text-4xl p-2 rounded-full"/>
                </div>
            </div>
        </div>
    </footer>

  )
}

export default Footer;