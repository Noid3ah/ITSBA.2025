const CallToAction = () => {
  return (
    <div className='contain flex items-center bg-[--black] text-white py-12 h-[500px] mb-[--section-bottom] rounded-3xl mt-24'>
      <div className='contain flex flex-col gap-8 items-center'>
        <h1 className='text-4xl font-[Poppins] font-semibold text-center'>
          Your Ride <br /> Is Just A Click Away
        </h1>
        <button className='bg-[--cta] text-base uppercase text-white px-8 py-4 font-bold font-[Poppins] rounded-lg flex items-center gap-2'>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
