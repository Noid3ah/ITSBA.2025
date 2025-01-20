const InfoCard = ({ children, icon: Icon, title }) => {
  return (
    <div className='sm:max-w-[300px] p-8 rounded-2xl text-white bg-[#192231] border border-white/10 flex flex-col gap-6'>
      <div className='rounded-full p-4 w-fit bg-[#465567] border-8 border-[#192231]/30 '>
        <Icon className='text-5xl' />
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='text-lg font-bold'>{title}</h2>
        <p className='text-xs text-white/60'>{children}</p>
      </div>
    </div>
  );
};

export default InfoCard;
