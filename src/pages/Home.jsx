import React from 'react';
import Header from '../components/Header';
// import TextCard from '../components/TextCard';

const Home = () => {
  return (
    <div>
      <Header />

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-semibold'>Lorem Ipsum is simply dummy text of the printing. </h1>
        <p className='text-[#868686] w-1/2 text-center py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's</p>
      </div>
      {/* <TextCard className='flex flex-col justify-center items-center my-5' textClass='w-1/2' /> */}
    </div>
  )
}

export default Home;
