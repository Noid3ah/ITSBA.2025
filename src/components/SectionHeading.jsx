const SectionHeading = ({ badge, children }) => {
  return (
    <div className='text-center space-y-4' id='vehicles'>
      <hr className='w-1/12 mx-auto my-8 border-dashed' />
      <h6 className='text-[--accent] inline-block px-4 py-2 rounded-full uppercase text-xs font-bold tracking-widest'>
        {badge}
      </h6>
      <h3 className='text-4xl font-medium'>{children}</h3>
    </div>
  );
};

export default SectionHeading;
