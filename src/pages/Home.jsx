import React from 'react';
import Header from '../components/Header';
import TextCard from '../components/TextCard';
import homeImg1 from '../assets/homeImg1.png';
import homeImg2 from '../assets/homeImg2.png';
import homeImg3 from '../assets/homeImg3.png';

const Home = () => {
  return (
    <div>
      <Header />

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-semibold'>Lorem Ipsum is simply dummy text of the printing. </h1>
        <p className='text-[#868686] w-1/2 text-center py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's</p>
      </div>

      <div className='flex'>
        <TextCard className='flex flex-col m-10 p-20 w-1/2 ' textClass='py-5' />
        <img src={homeImg1} alt="" className='w-3/5' />
      </div>
    </div>
  )
}

export default Home;
