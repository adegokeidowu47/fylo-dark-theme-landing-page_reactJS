import FyloLogo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
        <nav className=" flex items-center mx-auto p-10 justify-between">
            <img src={FyloLogo} alt="company_logo" />
            <div className="flex items-center justify-center space-x-16 text-lg font-small">
                <NavLink to="/" className="text-lightGray hover:text-white">Features</NavLink>
                <NavLink to="/" className="text-lightGray hover:text-white">Team</NavLink>
                <NavLink to="/" className="text-lightGray hover:text-white">Sign In</NavLink>
            </div>
        </nav>
    </>
  )
}

export default NavBar;