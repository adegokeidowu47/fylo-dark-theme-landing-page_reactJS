import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-center px-6">
      <FaExclamationTriangle className="text-yellow-400 text-5xl md:text-6xl lg:text-7xl mb-6" />
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        404 Not Found
      </h1>
      <p className="text-lightGray text-base sm:text-lg md:text-xl mb-6">
        This page does not exist!
      </p>

      {/* Button */}
      <Link to="/" className="inline-block text-white text-base sm:text-lg md:text-xl bg-gradient-to-tr from-teal to-cyan hover:from-lightTeal hover:to-lightTeal rounded-full px-12 sm:px-10 py-3 sm:py-4 transition-all">
        Go Back
      </Link>
    </section>
  )
}

export default NotFoundPage;