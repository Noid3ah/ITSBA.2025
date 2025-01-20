import testimonials from '../testimonials';
import SectionHeading from './SectionHeading';
import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <section className=' mb-[--section-bottom]'>
      <SectionHeading badge='Testimonials'>
        Join Hundreds of <br /> Satisfied Customers!
      </SectionHeading>

      <hr className='w-1/2 mx-auto my-8' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 contain'>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
