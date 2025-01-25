import { Link } from 'react-router-dom';

const Navbar = ({ isScrolled, isHome }) => {
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
          {isHome ? (
            <a href='#vehicles'>Vehicles</a>
          ) : (
            <Link to='/#vehicles'>Vehicles</Link>
          )}
        </li>
        <li className='hover:text-white'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
