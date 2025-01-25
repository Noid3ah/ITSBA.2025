const CallToAction = () => {
  return (
    <div className='cta-section contain flex items-center bg-[--black] text-white py-12 h-[500px] mb-[--section-bottom] rounded-3xl mt-24 relative isolate'>
      <div className='contain flex flex-col gap-4 items-center'>
        <h1 className='text-3xl font-[Poppins] font-semibold text-center'>
          Sign up now to get a 20% discount <br /> on your first booking
        </h1>
        <p className='text-base text-white/60'>
          Your Ride Is Just A Click Away!
        </p>
        <button className='bg-[--cta] text-base uppercase text-white px-8 py-4 font-bold font-[Poppins] rounded-lg flex items-center gap-2 mt-6'>
          Get Started
        </button>

        <div className='graphic absolute w-full h-full left-1/2 -translate-x-1/2 top-0 z-[-1] rounded-3xl'></div>
      </div>
    </div>
  );
};

export default CallToAction;
