import { useEffect, useState } from 'react';
import Button from './Button';
import Logo from './Logo';
import Navbar from './Navbar';
import SmallHeader from './SmallHeader';

function Header({ onClick }) {
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`header fixed md:flex items-center justify-between hidden transition-all ease-in-out duration-300 ${
          isScrolled
            ? 'bg-[#0C101C]/100 w-full left-0 top-0 z-[99] py-4'
            : 'bg-[#0C101C]/20 rounded-[0.75rem] py-2 w-[90%] left-1/2 -translate-x-1/2 top-[--header-height] px-[1.5rem]'
        }`}
        id='home'
      >
        <div
          className={`flex items-center justify-between w-full ${
            isScrolled && 'contain'
          }`}
        >
          <Logo />
          <Navbar isScrolled={isScrolled} />
          <Button
            className={`${isScrolled ? 'bg-white text-zinc-950 py-1.5' : ''}`}
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
