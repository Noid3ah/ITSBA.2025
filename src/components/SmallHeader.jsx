import { IoMenu } from 'react-icons/io5';
import Logo from './Logo';
import Button from './Button';
import { useState } from 'react';

const SmallHeader = ({ onClick, isScrolled }) => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((is) => !is);
  }
  return (
    <header
      className={`header fixed md:hidden items-center justify-between transition-all ease-in-out duration-300 ${
        isScrolled
          ? 'bg-[#0C101C]/100 w-full top-0 z-[99] py-4'
          : 'bg-[#0C101C]/20 rounded-[0.75rem] py-2 w-[90%] left-1/2 -translate-x-1/2 top-[--header-height] px-[1.5rem]'
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
      {open && <Navbar onClick={onClick} />}
    </header>
  );
};

function Navbar({ onClick }) {
  return (
    <nav
      className={`absolute top-[--header-height] right-1 bg-[#0C101C] text-white rounded-xl p-6 w-1/2 `}
    >
      <ul className='flex flex-col gap-2 text-base'>
        <li className='hover:bg-zinc-700 cursor-pointer p-4 rounded-lg'>
          <a href='#about' cla>
            About
          </a>
        </li>
        <li className='hover:bg-zinc-700 cursor-pointer p-4 rounded-lg'>
          <a href='#vehicles' cla>
            Vehicles
          </a>
        </li>
        <li className='hover:bg-zinc-700 cursor-pointer p-4 rounded-lg'>
          <a href='#contact' cla>
            Contact
          </a>
        </li>
      </ul>
      <Button
        className={`bg-white text-zinc-950 mt-8 w-full`}
        onClick={onClick}
      >
        Create Account
      </Button>
    </nav>
  );
}

export default SmallHeader;
