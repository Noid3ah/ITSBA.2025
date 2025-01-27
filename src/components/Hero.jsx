import { IoTrendingUp } from 'react-icons/io5';
import Brands from './Brands';
const Hero = ({ onClick }) => {
  return (
    <div className='hero relative flex items-end mb-32' id='home'>
      <div className='hero-overlay'></div>
      <div className='contain -translate-y-20 font-black'>
        <h1 className='font-black text-white text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight uppercase mb-4'>
          Rent a car <br /> for every
          <span className='text-[--cta] font-[Poppins]'>journey</span>
        </h1>
        <p className='text-base font-normal text-white hero-text mb-8'>
          Affodable rates. Exceptional service. <br /> Explore hassle-free.
        </p>
        <button className='bg-[--cta] text-base  text-[--black] px-6 py-3 font-medium font-[Poppins] rounded-lg flex items-center gap-2 hover:bg-transparent hover:text-[--cta] hover:outline hover:outline-[--cta] transition-all duration-200'>
          Book Now <IoTrendingUp className='text-xl' />
        </button>
      </div>
      <Brands />
    </div>
  );
};

export default Hero;
