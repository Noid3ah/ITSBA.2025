import { Link } from 'react-router-dom';

const Navbar = ({ isScrolled }) => {
  return (
    <nav>
      <ul
        className={`text-white/60 ${
          isScrolled && 'text-white/60'
        }  flex gap-10 text-sm `}
      >
        <li className='hover:text-white'>
          <Link to='/'>Home</Link>
        </li>
        <li className='hover:text-white'>
          <Link to='/about'>About</Link>
        </li>
        <li className='hover:text-white'>
          <a href='#vehicles'>Vehicles</a>
        </li>
        <li className='hover:text-white'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
