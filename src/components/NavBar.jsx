import FyloLogo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import HamberMenu from "./HamberMenu";


const NavBar = () => {
  
  return (
    <nav className="container flex items-center mx-auto p-10 justify-between">
        <img src={FyloLogo} alt="company_logo" className="w-[100px] h-auto lg:w-[150px]"/>
        <div>
          <div className="hidden md:flex items-center justify-center space-x-16 text-sm font-small">
            <NavLink to="/*" className="text-lightGray hover:text-white">Features</NavLink>
            <NavLink to="/*" className="text-lightGray hover:text-white">Team</NavLink>
            <NavLink to="/*" className="text-lightGray hover:text-white">Sign In</NavLink>
        </div>
        <HamberMenu />
        </div>
      </nav>
  )
}

export default NavBar;