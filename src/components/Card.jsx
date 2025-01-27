import { IoArrowForward, IoStarSharp } from 'react-icons/io5';
import Badge from './Badge';

const Card = ({ car }) => {
  return (
    <div className='rounded-md relative group transition-all duration-200 rounded-t-2xl'>
      <div className='absolute top-3 left-3 z-[50]'>
        <Badge>{car.type}</Badge>
      </div>
      <div className='shad w-full aspect-[1/.7] overflow-hidden relative rounded-2xl'>
        <img
          className='object-cover h-full w-full transition-all duration-200 group-hover:scale-105 rounded-2xl'
          src={car.img}
          alt=''
        />
        <div className='absolute top-0 left-0 w-full h-full group-hover:bg-black/30 group-hover:backdrop-blur-[1px] group-hover:rounded-t-2xl'></div>
      </div>
      <div className='card-text leading-none space-y-2 mt-4'>
        <div className='flex justify-between items-center'>
          <h3 className='text-[--fs] font-medium'>{car.make}</h3>
          <div className='flex items-center gap-1'>
            <span className='text-zinc-950 font-medium'>
              ${car.costPerDay} JMD
            </span>
            <span className='text-zinc-950/60'>day</span>
          </div>
        </div>
        <div className='flex flex-col-reverse justify-between items-start relative isolate gap-2'>
          <span className='text-zinc-950/60 flex items-center gap-1 '>
            {car.rating}
            <IoStarSharp className='inline-block text-[--accent] -mt-0.5' />
          </span>
          <span className='text-zinc-950/50 flex items-center gap-1'>
            {car.location}
          </span>
        </div>
      </div>
      <button className='bg-[hsl(var(--accent-light))] text-zinc-950 text-[13px] font-medium px-5 py-2 rounded-full absolute top-[60%] group-hover:top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center hover:bg-[--accent] whitespace-nowrap'>
        Book Now
        <IoArrowForward className='inline-block ml-2' />
      </button>
    </div>
  );
};

export default Card;
