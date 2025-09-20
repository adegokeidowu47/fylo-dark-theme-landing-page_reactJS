import avatarSatish from '../assets/images/profile-1.jpg';
import avatarBruce from '../assets/images/profile-2.jpg';
import avatarBoyd from '../assets/images/profile-3.jpg';

const TestimonialCards = () => {
  return (
    <section className='w-[90%] h-auto mt-25 mx-auto grid grid-cols-1 gap-10 bg-MainBg md:mt-50 stretch md:grid-cols-2 lg:grid-cols-3'>
      <div className='shadow-sm shadow-lightTeal h-auto mx-auto flex flex-col px-8 py-16 rounded-2xl gap-8 bg-testimonialBg'>
        {/* testimonial 01 */}
        <p className='text-[18px] text-lightGray'>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className='flex items-center gap-x-6'>
          <img
            src={avatarSatish}
            alt='Satish Profile Image'
            className='w-[40px] h-[40px] rounded-full'
          />
          <div>
            <h3 className='text-white text-[16px]'>Satish Patel</h3>
            <p className='text-lightGray'>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
      <div className='shadow-sm shadow-lightTeal h-auto mx-auto flex flex-col px-8 py-16 rounded-2xl gap-8 bg-testimonialBg'>
        {/* testimonial 02 */}
        <p className='text-[18px] text-lightGray'>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className='flex items-center gap-x-6'>
          <img
            src={avatarBruce}
            alt='Bruce Profile Image'
            className='w-[40px] h-[40px] rounded-full'
          />
          <div>
            <h3 className='text-white text-[16px]'>Bruce McKenzie</h3>
            <p className='text-lightGray'>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
      <div className='shadow-sm shadow-lightTeal h-auto mx-auto flex flex-col px-8 py-16 rounded-2xl gap-8 bg-testimonialBg'>
        {/* testimonial 03 */}
        <p className='text-[18px] text-lightGray'>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className='flex items-center gap-x-6'>
          <img
            src={avatarBoyd}
            alt='Boyd Profile Image'
            className='w-[40px] h-[40px] rounded-full'
          />
          <div>
            <h3 className='text-white text-[16px]'>Iva Boyd</h3>
            <p className='text-lightGray'>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCards;
