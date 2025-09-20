import IntroImage from '../assets/images/illustration-intro.png';
import { Link } from 'react-router-dom';

const FyloIntro = () => {
  return (
    <>
      <section
        id='Fylo_intro'
        className='w-[90%] flex justify-center items-center mx-auto my-10'
      >
        <div className='flex flex-col justify-between items-center gap-8 text-center'>
          <img
            src={IntroImage}
            alt='Illustration'
            className='w-[250px] md:w-[350px] lg:w-[600px] h-auto'
          />
          <p className='text-white text-xl md:text-2xl lg:text-3xl max-w-2xl'>
            All your files in one secure location, accessible anywhere.
          </p>
          <p className='text-lightGray text-sm md:text-base lg:text-lg max-w-xl'>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </p>
          <Link
            to='/*'
            className='text-white text-sm md:text-base lg:text-lg bg-gradient-to-tr from-teal to-cyan hover:from-lightTeal hover:to-lightTeal rounded-full px-6 md:px-10 py-3 mt-4 transition-all'
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default FyloIntro;
