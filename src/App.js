import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import cars from './cars';
import About from './components/About';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info';
import Modal from './components/Modal';
import SectionHeading from './components/SectionHeading';
import Testimonials from './components/Testimonials';
import './output.css';
import Layout from './pages/Layout';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [car, setCar] = useState(cars);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className='text-xl transition-all duration-300 ease-in-out'>
        {isModalOpen && <Modal isOpen={isModalOpen} closeModal={closeModal} />}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              path='/'
              element={
                <>
                  <Hero onClick={openModal} />
                  <Info />
                  <div className='flex flex-col gap-10'>
                    <SectionHeading badge={'Collections'}>
                      Explore Our Collection
                    </SectionHeading>
                    <Filter cars={car} setCar={setCar} />
                  </div>
                  <hr className='w-11/12 mx-auto my-8' />
                  <Cards cars={car} />
                  <Testimonials />
                  <Footer />
                </>
              }
            />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact onClick={openModal} />} />
            <Route path='*' element={<h1>404 - Page Not Found</h1>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
