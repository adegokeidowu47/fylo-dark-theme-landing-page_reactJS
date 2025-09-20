import { Link } from 'react-router-dom';
import illustrationImage from '../assets/images/illustration-stay-productive.png';
import { FaArrowCircleRight } from 'react-icons/fa';

const FyloWorks = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 px-6 lg:w-[88%]'>
      <div className='flex justify-center w-full lg:w-1/2'>
        <img
          src={illustrationImage}
          alt='Stay Productive Illustration'
          className='w-full max-w-[480px] md:max-w-[600px] lg:max-w-[650px] h-auto'
        />
      </div>
      <div className='w-full lg:w-1/2 flex flex-col gap-6 text-start'>
        <h1 className='text-white text-2xl md:text-4xl lg:text-5xl font-semibold'>
          Stay productive, wherever you are
        </h1>
        <p className='text-lightGray text-base md:text-lg'>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className='text-lightGray text-base md:text-lg'>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <Link
          to='/*'
          id='link'
          className='w-58 md:w-62 p-2 text-lightTeal text-lg hover:text-white transition-colors md:text-xl'
        >
          See how Fylo works
          <FaArrowCircleRight className='inline ml-1.5 mb-1' />
          <hr className='w-52 mt-1.5 md:w-56' />
        </Link>
      </div>
    </section>
  );
};

export default FyloWorks;
