import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <h1 className='font-extrabold tracking-wide text-white text-[1.44rem] text-xl'>
        <Link to='/'>Distincars.</Link>
      </h1>
    </div>
  );
};

export default Logo;
