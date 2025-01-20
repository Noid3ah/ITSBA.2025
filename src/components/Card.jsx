import Badge from './Badge';
import { IoArrowForward, IoLocationSharp, IoStarSharp } from 'react-icons/io5';

const Card = ({ car }) => {
  return (
    <div className='border overflow-hidden bg-white rounded-3xl  relative group transition-all duration-200'>
      <Badge>{car.type}</Badge>
      <div className='w-full aspect-[1/.7] overflow-hidden  relative'>
        <img
          className='object-cover h-full w-full rounded-t-3xl transition-all duration-200 group-hover:scale-105'
          src={car.img}
          alt=''
        />

        <div className='absolute top-0 left-0 w-full h-full group-hover:bg-black/30 group-hover:backdrop-blur-[1px] group-hover:rounded-t-2xl'></div>
      </div>
      <div className='p-4 space-y-2'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl font-medium'>{car.make}</h3>
          <div className='flex items-center'>
            <span className='text-zinc-950 text-lg font-medium'>
              ${car.costPerDay}
            </span>
            <span className='text-zinc-950/60 text-sm'> /day</span>
          </div>
        </div>
        <div className='flex justify-between items-center relative isolate'>
          <span className='text-zinc-950/60 text-base flex items-center gap-1 '>
            {car.rating}
            <IoStarSharp className='inline-block text-xl text-[--accent] -mt-0.5' />
          </span>

          <span className='text-zinc-950/30 text-sm flex items-center gap-1'>
            <IoLocationSharp /> {car.location}
          </span>

          {/* <div className='absolute -bottom-[1.08rem] -right-[1.08rem] h-16 w-[9.5rem] bg-[--background] border border-r-0 border-b-0 rounded-2xl -z-10 rounded-bl-none rounded-tr-none'></div> */}
        </div>
      </div>
      <button className='bg-[--accent] text-zinc-950 text-sm font-bold px-6 py-2.5 rounded-lg absolute top-[60%] group-hover:top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center'>
        Book Now
        <IoArrowForward className='inline-block ml-2' />
      </button>
    </div>
  );
};

export default Card;
