const Badge = ({ children }) => {
  return (
    <span className='shad rounded-full text-[13px] font-medium shadow-[--shadow] px-3 py-1.5 bg-white text-zinc-950 z-50'>
      {children}
    </span>
  );
};

export default Badge;
