import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section name='home' className='w-full h-screen bg-primary'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='flex flex-col'
        >
          <motion.p variants={item} className='text-secondary font-mono mb-4'>
            Hi, my name is
          </motion.p>
          <motion.h1 variants={item} className='text-4xl sm:text-7xl font-bold text-light'>
            Nilu.
          </motion.h1>
          <motion.h2 variants={item} className='text-4xl sm:text-7xl font-bold text-lighter mt-2'>
            I build Web3 and frontend experiences.
          </motion.h2>
          <motion.p variants={item} className='text-lighter py-6 max-w-[700px] text-lg leading-relaxed'>
            I’m an innovative Web3 and Frontend Developer specializing in engineering scalable MERN stack applications and secure smart contracts. Currently, I’m focused on developing interactive, component-driven web applications as a React JS Intern at <span className='text-secondary'>EmergingFive</span>.
          </motion.p>
          <motion.div variants={item}>
            <Link to='work' smooth={true} duration={500}>
              <button className='group text-secondary border-2 border-secondary px-6 py-3 my-2 flex items-center hover:bg-secondary/10 transition-all duration-300 rounded'>
                Check out my work!
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
