/* eslint-disable react/no-unescaped-entities */
import ServicesSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-8'>My services <span className='text-accent'>.</span></motion.h2>
          <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."
          </motion.p>
        </div>
        <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className='w-full xl:max-w-[65%]'>
        {/* slider */}
          <ServicesSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Services;
