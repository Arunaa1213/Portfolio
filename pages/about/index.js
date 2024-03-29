/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, {useState} from 'react';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaJava,
  FaPython,
  FaVuejs,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaDigitalOcean,
  FaBootstrap
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiDart,
  SiMysql,
  SiRedux,
  SiFlutter,
  SiExpress,
  SiFlask,
  SiFirebase,
  SiMongodb,
  SiRedis,
  SiNginx,
  SiTailwindcss,
  SiPandas,
  SiNumpy
} from "react-icons/si";

import {
  TbBrandNextjs
} from "react-icons/tb";
import {
  DiFirebase,
  DiGit
} from "react-icons/di";
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants';
import Bulb from '../../components/Bulb';
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        icons: [<FaJava />, <FaPython />, <FaJs />, <SiDart />, <SiMysql />],
      },
      {
        title: 'FrontEnd Development',
        icons: [
          <FaReact />,
          <TbBrandNextjs />,
          <FaVuejs />,
          <SiRedux />,
          <SiFlutter />,
        ],
      },
      {
        title: 'BackEnd Development',
        icons: [
          <FaNodeJs />,
          <SiExpress />,
          <SiFlask />,
          <SiFirebase />
        ],
      },
      {
        title: 'Databases',
        icons: [
          <SiMysql />,
          <SiMongodb />,
          <DiFirebase />,
          <SiRedis />,
        ],
      },
      {
        title: 'Devops',
        icons: [
          <DiGit />,
          <FaGithub />,
          <FaDocker />,
          <FaDigitalOcean />,
          <SiNginx />,
        ]
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />],
      },
      {
        title: 'Others',
        icons: [<FaHtml5 />, 
        <FaCss3 />,,
        <FaBootstrap />,
        <SiTailwindcss />,
        <SiPandas />,
        <SiNumpy />
      ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'KEC hackathon 22 - Finalist',
        stage: '2022 - 2023',
      },
      {
        title: 'Academic Excellence Award',
        stage: '2023',
      },
      {
        title: 'Q Quest 22 - honour',
        stage: '2022',
      },
      {
        title: 'Xion 22 - Finalist',
        stage: '2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Associate Developer Intern - Guvi',
        stage: '2023 - Present',
      },
      {
        title: 'Full Stack developer Intern - Ligths INC',
        stage: '2022 - 2023',
      },
      {
        title: 'Technical content writer - Floxus',
        stage: '2022',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Git and GitHub version control',
        stage: '2021',
      },
      {
        title: 'Android Development Beginner Course',
        stage: '2021',
      },
      {
        title: 'Data Science For engineers',
        stage: '2022',
      },
      {
        title: 'Foundation in Cryptography',
        stage: '2022',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import CountUp from 'react-countup';
const About = () => {
  const [index, setIndex] = useState(0);
  return (
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    <motion.div 
      variants= {fadeIn('right', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='hidden xl:flex absolute bottom-0 -left-[370px]'>
    </motion.div>
    <Bulb />
    <div className= 'container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2 
        variants= {fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden' 
        className='h2'>Captivating <span className='text-accent'>stories</span> birth magnificent designs</motion.h2>
        <motion.p 
        variants= {fadeIn('right', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden' 
        className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          4 years ago, I began my journey as a developer. Since then, I've done projects for small business, turned exciting ideas into reality, explored new technologies and published articles on technology.
        </motion.p>
        <motion.div 
        variants= {fadeIn('right', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden' 
        className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 xl:gap-x-6'>
            {/* experience */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={2} duration={10} /> 
              </div>
              <div className='text-xs uppercase tracking-[1px] leading=[1.4] max-w-[100px]'>
                Years of development experience
              </div>
            </div>
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={10} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading=[1.4] max-w-[100px]'>
                Finished Projects
              </div>
            </div>
            {/* awards */}
            <div className='relative flex-1'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={5} duration={5} />
              </div>
              <div className='text-xs uppercase tracking-[1px] leading=[1.4] max-w-[100px]'>
                Winning Awards
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div variants= {fadeIn('left', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden' className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>
                {item.title}
              </div>
            );
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 x:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, itemIndex) => {
                    return <div className='text-2xl text-white'>{icon}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;
