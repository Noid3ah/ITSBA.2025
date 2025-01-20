import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';

const Cards = ({ cars }) => {
  return (
    <section className='contain mb-[--section-bottom]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {cars.map((car, index) => (
          <Card key={index} car={car} />
        ))}
      </div>
      <button className='bg-slate-950 text-white text-lg py-2.5 rounded-full mt-8 px-10 mx-auto block opacity-70 cursor-not-allowed'>
        All Cars
      </button>
    </section>
  );
};

export default Cards;
