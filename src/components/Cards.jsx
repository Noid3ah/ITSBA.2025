import { IoArrowForward } from 'react-icons/io5';
import Card from './Card';

const Cards = ({ cars }) => {
  return (
    <section className='contain mb-[--section-bottom]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {cars.map((car, index) => (
          <Card key={index} car={car} />
        ))}
      </div>
      <button
        className='bg-slate-950 text-white text-base py-2.5 rounded-full mt-8 px-10 mx-auto   cursor-not-allowed flex items-center gap-2'
        disabled
      >
        All Collections <IoArrowForward />
      </button>
    </section>
  );
};

export default Cards;
