import InfoCard from './InfoCard';
import {
  IoCarOutline,
  IoShieldCheckmarkOutline,
  IoCardOutline,
  IoCallOutline,
} from 'react-icons/io5';

const Info = () => {
  return (
    <section className=' flex justify-center items-center bg-[#0C101C]  p-8 py-16  mx-auto mb-[--section-bottom]'>
      <div className='max-w-[--constraint-width] flex justify-center gap-8 w-full flex-wrap'>
        <InfoCard title='Well-Maintained Car' icon={IoCarOutline}>
          Enjoy your trip in peace and comfort with our car rental fleet,
          prioritize the health and safety of our vehicles.
        </InfoCard>
        <InfoCard title='Secure Payments' icon={IoShieldCheckmarkOutline}>
          With a safe and reliable payment system, you can continue your journey
          with peace of mind, without worrying about transaction security.
        </InfoCard>
        <InfoCard title='24/7 Customer Support' icon={IoCallOutline}>
          We understand that the journey doesn't always run smoothly. Therefore,
          our customer support team is ready to help you 24/7.
        </InfoCard>
        <InfoCard title='Flexible Pricing' icon={IoCardOutline}>
          We can offer you the right vehicle at the right price to fit your
          budget
        </InfoCard>
      </div>
    </section>
  );
};

export default Info;
