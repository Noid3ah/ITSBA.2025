const Button = ({ className, children, onClick, isScrolled }) => {
  return (
    <button
      className={`bg-slate-950 ${
        isScrolled && ' border border-white/10'
      } text-white text-sm px-3 py-2.5 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
