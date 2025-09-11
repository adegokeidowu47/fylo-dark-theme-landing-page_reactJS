import IntroImage from "../assets/images/illustration-intro.png";
import { Link } from "react-router-dom";

const FyloIntro = () => {

  return (
    <>
        <section id="Fylo_intro" className="container flex justify-center items-center mx-auto mt-10 mb-10">
            <div className="flex flex-col justify-between items-center gap-10"> 
                <img src={IntroImage} alt="Illustration Image" className="w-[350px] md:w-[650px] h-auto"/>
                <p className="w-md text-xl text-white text-center md:w-2xl md:text-3xl">All your files in one secure location, accessible anywhere.</p>
                <p className="w-md text-center text-md text-lightGray md:w-lg md:text-1xl">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <Link to="/*" className="text-white text-[14px] bg-gradient-to-tr from-teal to-cyan hover:from-lightTeal hover:to-lightTeal hover:bg-gradient-to-tr rounded-full px-18 py-3 mt-4">Get Started</Link>
            </div>
        </section>
    </>
  )
}

export default FyloIntro;