import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image 
        src={'/Arunaa_photo-removebg-preview_auto_x2_colored-removebg-preview (1).png'} 
        width={737} 
        height={678} 
        alt='' 
        // className='translate-x-0 w-full h-full' 
      />
    </div>
  );
};

export default Avatar;
