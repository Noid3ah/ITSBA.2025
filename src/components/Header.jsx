import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import Logo from './Logo';
import Navbar from './Navbar';
import SmallHeader from './SmallHeader';

function Header({ onClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleScroll = () => {
    if (window.scrollY > 250) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header fixed md:flex items-center justify-between hidden transition-all ease-in-out duration-300 z-[99] ${
          isHome
            ? isScrolled
              ? 'bg-[--black] backdrop-blur-md w-full left-0 top-0 z-[99] py-4'
              : 'bg-[--black] text-zinc-950 rounded-[0.75rem] py-2 w-[90%] left-1/2 -translate-x-1/2 top-[--header-height] px-[1.5rem] z'
            : ' bg-black py-4 w-full'
        }`}
        id='home'
      >
        <div
          className={`flex items-center justify-between w-full ${
            isHome ? isScrolled && 'contain' : 'contain'
          }`}
        >
          <Logo />
          <Navbar isScrolled={isScrolled} isHome={isHome} location={location} />
          <Button
            className={`${
              isScrolled
                ? 'hover:bg-[hsl(var(--accent-light))] hover:text-[--black] text-white/80 py-1.5 border-none'
                : 'hover:text-[hsl(var(--accent-light))] text-white/80'
            }`}
            onClick={onClick}
            isScrolled={isScrolled}
          >
            Create Account
          </Button>
        </div>
      </header>
      <SmallHeader onClick={onClick} isScrolled={isScrolled} />
    </>
  );
}

export default Header;
