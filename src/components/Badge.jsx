const Badge = ({ children }) => {
  return (
    <span className='rounded-full text-xs px-3 py-1.5 absolute top-4 right-4 bg-white text-slate-950 border z-50'>
      {children}
    </span>
  );
};

export default Badge;
