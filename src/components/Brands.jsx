const Brands = () => {
  return (
    <div>
      <div className='bg-[--background] h-[146px] rounded-md max-w-[--constraint-width] w-[--constraint-width-percentage] absolute -bottom-[85px] left-1/2 -translate-x-1/2 flex justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-16 xl:gap-24'>
        <img
          className='w-10 lg:w-12 xl:w-16'
          src='/icons/Honda.svg'
          alt='honda'
        />
        <img
          className='w-10 lg:w-12 xl:w-16'
          src='/icons/mitsubishi.svg'
          alt='mitsubishi'
        />
        <img
          className='w-10 lg:w-12 xl:w-16'
          src='/icons/toyota.svg'
          alt='toyota'
        />
        <img className='w-10 lg:w-12 xl:w-16' src='/icons/bmw.svg' alt='bmw' />
        <img
          className='w-10 lg:w-12 xl:w-16'
          src='/icons/subaru.svg'
          alt='subaru'
        />
        <img
          className='w-10 lg:w-12 xl:w-16'
          src='/icons/nissan.svg'
          alt='nissan'
        />
        <img
          className='w-10 lg:w-12 xl:w-16'
          src='/icons/audi.svg'
          alt='audi'
        />
      </div>
    </div>
  );
};

export default Brands;
