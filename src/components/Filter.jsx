import FilterButton from './FilterButton';
import cars from '../cars';
import { useState } from 'react';

const Filter = ({ setCar }) => {
  const [activeFIlter, setActiveFilter] = useState('All Types');

  function filterByType(type) {
    setActiveFilter(type);

    if (type === 'All Types') {
      setCar(cars);
      return;
    }
    const filtered = cars.filter((car) => car.type === type);
    setCar(filtered);
  }
  return (
    <div className=' justify-center gap-4 hidden md:flex'>
      <FilterButton
        isActive={activeFIlter === 'All Types'}
        onClick={() => filterByType('All Types')}
      >
        All Types
      </FilterButton>
      <FilterButton
        isActive={activeFIlter === 'SUV'}
        onClick={() => filterByType('SUV')}
      >
        SUV
      </FilterButton>
      <FilterButton
        isActive={activeFIlter === 'Sedan'}
        onClick={() => filterByType('Sedan')}
      >
        Sedan
      </FilterButton>
      <FilterButton
        isActive={activeFIlter === 'Hatchback'}
        onClick={() => filterByType('Hatchback')}
      >
        Hatchback
      </FilterButton>
      <FilterButton
        isActive={activeFIlter === 'Convertible'}
        onClick={() => filterByType('Convertible')}
      >
        Convertible
      </FilterButton>
    </div>
  );
};

export default Filter;
