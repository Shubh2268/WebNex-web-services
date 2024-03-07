import React from 'react';
import Header from '../components/Header';
import TextCard from '../components/TextCard';

const Home = () => {
  return (
    <div>
      <Header />
      <TextCard className='flex flex-col justify-center items-center my-5' textClass='w-1/2' />
    </div>
  )
}

export default Home;
