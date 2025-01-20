const Navbar = ({ isScrolled }) => {
  return (
    <nav>
      <ul
        className={`text-white/60 ${
          isScrolled && 'text-white/60'
        }  flex gap-10 text-sm `}
      >
        <li className='hover:text-white'>
          <a href='#about'>About</a>
        </li>
        <li className='hover:text-white'>
          <a href='#vehicles'>Vehicles</a>
        </li>
        <li className='hover:text-white'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
