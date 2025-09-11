import { Link } from "react-router-dom";
import illustrationImage from "../assets/images/illustration-stay-productive.png";
import { FaArrowCircleRight } from "react-icons/fa";

const FyloWorks = () => {
  return (
    <section className="w-[78%]  h-auto flex justify-around items-center mx-auto gap-0">
        <div className="">
            <img src={illustrationImage} alt="Stay Productive Iluustration" className="w-[100%] md:w-[750px] h-auto" />
        </div>
        <div className="flex flex-col gap-y-6">
           <h1 className="w-md text-white text-4xl">Stay productive, wherever you are</h1> 
           <p className="w-xl text-lightGray">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
           <p className="w-xl text-lightGray" >Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
           <Link to="/*" id="link" className="w-[240px] p-2 text-lightTeal hover:text-white text-xl decoration-1 decoration-lightTeal ">See how Fylo works
           <FaArrowCircleRight className="inline ml-1.5 mb-1" />
           <hr className="w-[215px] mt-1" />
           </Link>
        </div>
    </section>
  )
}

export default FyloWorks