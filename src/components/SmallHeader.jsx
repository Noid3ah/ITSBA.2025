import { IoMenu } from 'react-icons/io5';
import Logo from './Logo';
import Button from './Button';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SmallHeader = ({ onClick, isScrolled }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  function handleOpen() {
    setOpen((is) => !is);
  }
  return (
    <header
      className={`header fixed md:hidden items-center justify-between transition-all ease-in-out duration-300 z-[99] ${
        isHome
          ? isScrolled
            ? 'bg-[--black] w-full top-0 z-[99] py-4'
            : 'bg-[--black] rounded-[0.75rem] py-2 w-[90%] left-1/2 -translate-x-1/2 top-[--header-height] px-[1.5rem]'
          : 'w-full bg-[--black] py-4'
      }`}
      id='home'
    >
      <div className='contain flex items-center justify-between px-0'>
        <Logo />
        <IoMenu
          className='text-3xl text-white cursor-pointer'
          onClick={handleOpen}
        />
      </div>
      {open && <Navbar onClick={onClick} setOpen={setOpen} isHome={isHome} />}
    </header>
  );
};

function Navbar({ onClick, setOpen, isHome }) {
  return (
    <nav
      className={`absolute top-[--header-height] right-0 bg-[--black] text-white rounded-xl p-6 w-full `}
    >
      <ul className='flex flex-col gap-2 text-base'>
        <li className='hover:bg-zinc-700 cursor-pointer p-4 rounded-lg'>
          <Link to='/' onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li className='hover:bg-zinc-700 cursor-pointer p-4 rounded-lg'>
          <Link to='/about' onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li className='hover:bg-zinc-700 cursor-pointer p-4 rounded-lg'>
          {isHome ? (
            <a href='#vehicles' onClick={() => setOpen(false)}>
              Vehicles
            </a>
          ) : (
            <Link to='/#vehicles' onClick={() => setOpen(false)}>
              Vehicles
            </Link>
          )}
        </li>
        <li className='hover:bg-zinc-700 cursor-pointer p-4 rounded-lg'>
          <Link to='/contact' onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
      <Button
        className={` mt-8 w-full border border-white/10 bg-[hsl(240,4%,20%)] hover:bg-[hsl(240,4%,95%)] hover:text-[--black] text-white/80`}
        onClick={() => {
          onClick();
          setOpen(false);
        }}
      >
        Create Account
      </Button>
    </nav>
  );
}

export default SmallHeader;
