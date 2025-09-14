import { Link } from "react-router-dom";
import illustrationImage from "../assets/images/illustration-stay-productive.png";
import { FaArrowCircleRight } from "react-icons/fa";

const FyloWorks = () => {
  
  return (
    <section className="container h-auto flex flex-col justify-between items-center mx-auto gap-y-20 lg:w-[88%] md:flex-row md:gap-18">
        <div className="">
            <img src={illustrationImage} alt="Stay Productive Illustration" className="w-[480px] md:w-[1050px] h-auto" />
        </div>
        <div className="w-[90%] flex flex-col mx-auto gap-y-6 text-start lg:w-1/2">
           <h1 className="w-[80%] text-white text-2xl md:text-4xl lg:text-5xl lg:w-[100%]">Stay productive, wherever you are</h1> 
           <p className="text-lightGray md:w-md">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
           <p className="text-lightGray md:w-md" >Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
           <Link to="/*" id="link" className="w-[240px] p-2 text-lightTeal text-lg hover:text-white md:text-xl">See how Fylo works
           <FaArrowCircleRight className="inline ml-1.5 mb-1" />
           <hr className="w-[195px] mt-1 ml-0 md:w-[215px]" />
           </Link>
        </div>
    </section>
  )
}

export default FyloWorks;