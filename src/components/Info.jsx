import InfoCard from './InfoCard';
import { IoCarOutline } from 'react-icons/io5';

const Info = () => {
  return (
    <section className=' flex justify-center items-center bg-[#0C101C]  p-8 py-16  mx-auto mb-[--section-bottom]'>
      <div className='max-w-[--constraint-width] flex justify-center gap-8 w-full flex-wrap'>
        <InfoCard title='Well-Maintained Car' icon={IoCarOutline}>
          Enjoy your trip in peace and comfort with our car rental fleet,
          prioritize the health and safety of our vehicles.
        </InfoCard>
        <InfoCard title='Well-Maintained Car' icon={IoCarOutline}>
          Enjoy your trip in peace and comfort with our car rental fleet,
          prioritize the health and safety of our vehicles.
        </InfoCard>
        <InfoCard title='Well-Maintained Car' icon={IoCarOutline}>
          Enjoy your trip in peace and comfort with our car rental fleet,
          prioritize the health and safety of our vehicles.
        </InfoCard>
        <InfoCard title='Well-Maintained Car' icon={IoCarOutline}>
          Enjoy your trip in peace and comfort with our car rental fleet,
          prioritize the health and safety of our vehicles.
        </InfoCard>
      </div>
    </section>
  );
};

export default Info;
