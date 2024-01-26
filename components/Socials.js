import Link from "next/link";
import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbleLine, RiBehanceLine, RiPinterestLine,} from 'react-icons/ri';
import {
  PiInstagramLogoFill,
} from 'react-icons/pi';
import {
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs';
import {
  GrMail
} from 'react-icons/gr';
import {
  SiLeetcode,
} from 'react-icons/si';
const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://github.com/Arunaa1213'} className="hover:text-accent transition-all duration-300">
      <BsGithub />
    </Link>
    <Link href={'https://www.linkedin.com/in/arunaa-sureshkumar/'} className="hover:text-accent transition-all duration-300">
      <BsLinkedin />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <GrMail />
    </Link>
    <Link href={'https://leetcode.com/arunaa_1213/'} className="hover:text-accent transition-all duration-300">
      <SiLeetcode />
    </Link>
  </div>
  );
};

export default Socials;
