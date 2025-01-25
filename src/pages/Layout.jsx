import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ onClick }) => {
  return (
    <div className='flex flex-col'>
      <Header onClick={onClick} />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
