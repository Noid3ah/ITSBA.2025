import { useState } from 'react';
import About from './components/About';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info';
import Modal from './components/Modal';
import SmallFilter from './components/SmallFilter';
import './output.css';
import cars from './cars';
import Testimonials from './components/Testimonials';
import SectionHeading from './components/SectionHeading';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [car, setCar] = useState(cars);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='text-xl transition-all duration-300 ease-in-out'>
      {isModalOpen && <Modal isOpen={isModalOpen} closeModal={closeModal} />}
      <Hero onClick={openModal} />
      <Info />
      <div className='flex flex-col gap-10'>
        <SectionHeading badge={'Collections'}>
          Explore Our Collection
        </SectionHeading>
        <Filter cars={car} setCar={setCar} />
        {/* <SmallFilter cars={car} setCar={setCar} /> */}
      </div>
      <hr className='w-11/12 mx-auto my-8' />
      <Cards cars={car} />
      <Testimonials />
      <About />
      <Contact onClick={openModal} />
      <Footer />
    </div>
  );
}

export default App;
