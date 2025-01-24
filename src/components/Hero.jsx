import { IoTrendingUp } from 'react-icons/io5';
import Brands from './Brands';
import Header from './Header';
const Hero = ({ onClick }) => {
  return (
    <div className='hero relative flex items-end mb-32' id='home'>
      <Header onClick={onClick} />

      <div className='contain -translate-y-20 font-black space-y-6'>
        <h1 className='font-black text-white text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight uppercase'>
          Rent a car <br /> for every{' '}
          <span className='text-[--accent]'>journey</span>
        </h1>
        <button className='bg-[--cta] text-base uppercase text-white px-6 py-4 font-bold font-[Poppins] rounded-lg flex items-center gap-2'>
          Book Now <IoTrendingUp className='text-xl' />
        </button>
      </div>
      <Brands />
    </div>
  );
};

export default Hero;
