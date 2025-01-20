import StarRating from './StarRating';

const Testimonial = ({ name, img, review, rating }) => {
  return (
    <div className='select-none flex flex-col gap-4 bg-white p-10 rounded-3xl  border'>
      <span className='text-blue-400 [--size:3.5rem] mb-8'>
        <svg
          className='w-[--size] h-[--size]'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M20 5H4V19H20V5ZM4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4Z'
            fill='currentColor'
          />
          <path
            d='M9.06723 9.19629H12.0672L9.93267 14.8038H6.93267L9.06723 9.19629Z'
            fill='currentColor'
          />
          <path
            d='M14.0672 9.19629H17.0672L14.9327 14.8038H11.9327L14.0672 9.19629Z'
            fill='currentColor'
          />
        </svg>
      </span>
      <p className='text-sm'>"{review}"</p>
      <div className='mt-auto space-y-3'>
        <StarRating
          defaultRating={Math.floor(rating)}
          color='#ffc30f'
          className={'pointer-events-none'}
          size='26'
        />

        <div className='flex items-center gap-4 [--size:3.5rem] mt-auto'>
          <img
            className='w-[--size] h-[--size] object-cover rounded-full'
            src={img}
            alt=''
          />
          <div className='flex flex-col'>
            <span className='font-semibold text-lg'>{name}</span>
            <span className='text-xs text-gray-400'>Customer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
