import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";


const NotFoundPage = () => {
  return (
    <section className="w-[100%] h-[90vh] mx-auto text-center flex flex-col justify-center items-center space-y-10">
      < FaExclamationTriangle className=" text-yellow-400 text-6xl mb-4" />
      <h1 className=" text-white text-5xl md:text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-white text-xl mb-5">This page does not exist!</p>
       <Link to="/" className="text-white text-[18px] bg-gradient-to-tr from-teal to-cyan hover:from-lightTeal hover:to-lightTeal hover:bg-gradient-to-tr rounded-full px-18 py-4 mt-4">Go Back</Link>
    </section>

  )
}

export default NotFoundPage;