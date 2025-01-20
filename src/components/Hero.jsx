import Header from './Header';
import Brands from './Brands';
const Hero = ({ onClick }) => {
  return (
    <div className='hero relative flex items-end mb-32' id='home'>
      <Header onClick={onClick} />

      <div className='contain -translate-y-20 font-black'>
        <h1 className='font-black text-white text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-tight uppercase'>
          Rent a car <br /> for every{' '}
          <span className='text-[--accent]'>journey</span>
        </h1>
      </div>
      <Brands />
    </div>
  );
};

export default Hero;
