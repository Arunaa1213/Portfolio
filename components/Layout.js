import { Chicle, Sora } from '@next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable:'--font-sora',
  weight: ['100','200','300','400','500','600','700','800'],
});

import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'
// import Transition from '../components/Transition'
import { children } from 'react';

const Layout = ({ children }) => {
  return (
  <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-auto`}>
    <TopLeftImg />
    <Nav />
    <Header />
    {/* <Transition /> */}
    { children }
  </div>
  );
};

export default Layout;
