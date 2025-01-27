import { Link } from 'react-router-dom';

const Navbar = ({ isScrolled, isHome, location }) => {
  const isAbout = location.pathname === '/about';
  const isContact = location.pathname === '/contact';
  const isVehicles = location.pathname === '/#vehicles';

  return (
    <nav>
      <ul
        className={`text-white/60 ${
          isScrolled && 'text-white/60'
        }  flex gap-10 text-sm `}
      >
        <li
          className={`hover:text-[hsl(var(--accent-light))] ${
            isHome && 'text-[hsl(var(--accent-light))] '
          }`}
        >
          <Link to='/'>Home</Link>
        </li>
        <li
          className={`hover:text-[hsl(var(--accent-light))] ${
            isAbout && 'text-[hsl(var(--accent-light))] '
          }`}
        >
          <Link to='/about'>About</Link>
        </li>
        <li
          className={`hover:text-[hsl(var(--accent-light))] ${
            isVehicles && 'text-[hsl(var(--accent-light))] '
          }`}
        >
          {isHome ? (
            <a href='#vehicles'>Vehicles</a>
          ) : (
            <Link to='/#vehicles'>Vehicles</Link>
          )}
        </li>
        <li
          className={`hover:text-[hsl(var(--accent-light))] ${
            isContact && 'text-[hsl(var(--accent-light))] '
          }`}
        >
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
