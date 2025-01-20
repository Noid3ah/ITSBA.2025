import SectionHeading from './SectionHeading';
const About = () => {
  return (
    <section className='contain mb-[--section-bottom]' id='about'>
      <SectionHeading badge='About'>Discover Our Story</SectionHeading>
      <hr className='w-11/12 mx-auto my-8' />
      <div className='rounded-3xl bg-[#192231] text-white py-32 px-8'>
        <div className='contain flex flex-col items-center'>
          <h1 className='text-center text-4xl font-medium'>About Us</h1>
          <hr className='w-1/2 mx-auto my-8 border-white/10' />
          <p className='max-w-[600px] text-center text-sm leading-loose text-white/60'>
            Welcome to Distincars, where quality meets convenience. We are your
            trusted partner for hassle-free car rentals, offering a wide range
            of vehicles tailored to fit your needs. Whether you’re looking for a
            reliable sedan for your daily commute, an SUV for your family road
            trip, or a luxury ride to make a statement, we’ve got you covered.
            <br />
            <br />
            At Distincars, we pride ourselves on providing exceptional service,
            transparent pricing, and a seamless booking experience. Our fleet is
            regularly maintained to ensure safety and comfort, so you can drive
            with confidence wherever the road takes you.
            <br />
            <br />
            We believe in making car rentals distinctively better—because you
            deserve nothing less. Explore our options today and discover the
            perfect vehicle for your journey.{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
