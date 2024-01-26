/* eslint-disable react/jsx-key */
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'KEC Connect',
          path: '/Screenshot (399).png',
          link: 'https://play.google.com/store/apps/details?id=com.kec.cseautomation.kecconnect',
        },
        {
          title: 'KEC Credit Automation',
          path: '/credit_automation.png',
          link: 'https://github.com/Arunaa1213/KEC-Credit-Automation',
        },
        {
          title: 'Smart Transportation',
          path: '/smart_transportation (1).png',
          link: 'https://github.com/GOKULKRISHNA-R/Smart-Transportation',
        },
        {
          title: 'Messenger',
          path: '/Screenshot (398).png',
          link: 'https://github.com/Arunaa1213/Messenger',
        },
      ],
    },
    {
      images: [
        {
          title: 'Virtual Mouse',
          path: '/thumb2.jpg',
          link: 'https://github.com/Arunaa1213/Cursor-Movement',
        },
      ],
    },
  ],
};



import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';

// import { Link } from 'react-router-dom';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs'

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[ Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) =>{
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                  <div className='flex items-center justify-center relative overflow-hidden group'>
                    {/* image */}
                    <Image src={image.path} width={400} height={200} alt=''/>
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    {/* title */}
                    {/* <Link to={image.link}> */}
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'
                    onClick={() => {
                      window.location.href = `${image.link}`; // Replace with the actual target page URL
                    }}
                    >
                    <div className='delay-100'>{image.title}</div>
                      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        <div className='delay-150'>VIEW</div>
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>PROJECT</div>
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                </div>
                );
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default WorkSlider;
