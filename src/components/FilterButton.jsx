const FilterButton = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`rounded-full text-base px-6 py-2 border transition-all ${
        isActive
          ? 'bg-slate-950 text-white'
          : 'bg-white text-slate-950 hover:bg-slate-200'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;
