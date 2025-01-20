import Logo from './Logo';
import SectionHeading from './SectionHeading';

const Contact = ({ onClick }) => {
  function handleSubmit(e) {
    e.preventDefault();
    onClick();
  }

  return (
    <section className='contain mb-[--section-bottom]' id='contact'>
      <SectionHeading badge='Contact'>Get In Touch</SectionHeading>
      <div className=''>
        <hr className='w-1/2 mx-auto my-8' />
        <div className='flex md:flex-row flex-col justify-center gap-12 mt-12'>
          <form
            action=''
            className='space-y-4 w-full max-w-[600px]'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col gap-2 '>
              <label htmlFor='name' className='text-sm'>
                First name
              </label>
              <input
                className='border rounded-lg px-4 py-2 placeholder:text-sm'
                type='text'
                id='name'
                placeholder='John'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label htmlFor='lname' className='text-sm'>
                Last name
              </label>
              <input
                className='border rounded-lg px-4 py-2 placeholder:text-sm'
                type='text'
                id='lname'
                placeholder='Doe'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label htmlFor='email' className='text-sm'>
                Email
              </label>
              <input
                className='border rounded-lg px-4 py-2 placeholder:text-sm'
                type='text'
                id='email'
                placeholder='email@example.com'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label htmlFor='tarea' className='text-sm'>
                Message
              </label>
              <textarea
                rows={5}
                name=''
                id='tarea'
                className='border rounded-lg px-4 py-2 placeholder:text-sm resize-none'
              ></textarea>
            </div>
            <button className='bg-slate-950 text-white text-base py-4 rounded-lg mt-8 px-10 block'>
              Send Message
            </button>
          </form>
          <div className='min-h-full min-w-[400px] bg-[#192231] p-4 py-8 rounded-2xl flex flex-col gap-4 justify-center items-center'>
            <span className='flex justify-center items-center'>
              <Logo />
            </span>

            <div className='text-white/60 text-sm flex flex-col gap-2 items-center'>
              <p>Info@distinctioncarrentals.com</p>
              <p>(123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
