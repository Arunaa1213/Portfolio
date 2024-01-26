/* eslint-disable react/no-unescaped-entities */

import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Work = () => {
  return (
  <div className='h-full bg-primary/30 py-36 items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-12'>My Work <span className='text-accent'>.</span></motion.h2>
          <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
          Each project is a testament to my problem-solving skills, creativity, and commitment to delivering results. From development to design and project management, I've been fortunate to work on a diverse range of endeavors. If you're interested in working together or have any inquiries, don't hesitate to reach out through the provided contact information.
          </motion.p>
        </div>
        <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%]'>
        {/* slider */}
          <WorkSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Work;
