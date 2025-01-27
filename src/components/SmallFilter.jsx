const SmallFilter = ({ cars, setCar, filterByType }) => {
  return (
    <div className='contain md:hidden flex '>
      <div className='ml-auto border p-2 px-6 rounded-lg'>
        <select
          className='text-base'
          name=''
          id=''
          onChange={(e) => filterByType(e.target.value)}
        >
          <option value='All Types'>All Types</option>
          <option value='SUV'>SUV</option>
          <option value='Sedan'>Sedan</option>
          <option value='Hatchback'>Hatchback</option>
          <option value='Convertible'>Convertible</option>
        </select>
      </div>
    </div>
  );
};

export default SmallFilter;
