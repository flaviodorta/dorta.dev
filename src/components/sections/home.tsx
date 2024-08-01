import { BackgroundBeams } from '../ui/background-beams';
import Reveal from '../ui/reveal';

const Home = () => {
  return (
    <section
      id='home'
      className='flex container-section z-10 flex-col gap-10 mt-[300px]'
    >
      <Reveal>
        <h1 className='heading-size p-0 text-white w-fit'>
          Hello, I&apos;m Dorta<span className='text-primary'>.</span>
        </h1>
      </Reveal>

      <Reveal>
        <h2 className='text-4xl font-light subheading-size'>
          I&apos;m a{' '}
          <span className='text-primary  font-black'>Full Stack Developer</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className='font-light leading-8 max-w-[800px] w-full'>
          I&apos;ve spent the last 5 years as JavaScript Fullstack developer
          based in São Paulo. With a strong focus on creative design and
          user-centered solutions, I am ready to offer innovative web
          development services. Leveraging my expertise in JavaScript, I can
          create dynamic and interactive applications that provide a unique user
          experience.
        </p>
      </Reveal>
    </section>
  );
};

export default Home;
