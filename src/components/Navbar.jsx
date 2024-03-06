import React, { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about us'
    },
    {
      id: 3,
      link: 'services'
    },
    {
      id: 4,
      link: 'blog'
    }
  ];

  return (
    <div className='w-full z-20'>

      <div className='px-10 py-2 flex items-center justify-between w-full h-full'>

        <div className='flex items-center'>
          <h1 className='text-2xl sm:text-3xl text-primary font-bold py-2 sm:py-0'>WebNex</h1>
        </div>

        <ul className='hidden md:flex'>
          {
            links.map(({ id, link }) => (
              <li key={id} className='capitalize p-4 cursor-pointer font-medium hover:text-primary duration-200'>
                <a>
                  {link}
                </a>
              </li>
            ))
          }
          <div className='flex items-center'>
            <button className='capitalize font-medium px-5 py-2 bg-primary text-white rounded-md' >contact us</button>
          </div>
        </ul>

        {/* burger icon */}
        <div className='sm:hidden'>
          <div className='cursor-pointer'>
            <HiOutlineMenuAlt2 onClick={() => setNav(true)} size={25} />
          </div>
        </div>

      </div>

      {/* mobile menu  */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-gray-200 backdrop-blur' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-4/5 h-full p-10 ease-in duration-500' : 'fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <h2 onClick={() => setNav(false)} className='text-2xl text-primary font-bold capitalize cursor-pointer'>WebNex</h2>
              <div className='p-3 cursor-pointer'>
                <LiaTimesSolid onClick={() => setNav(false)} size={25} />
              </div>
            </div>
          </div>

          <div className='mt-6 flex flex-col items-start h-fit gap-12'>

            <ul className='capitalize'>
              {
                links.map(({ id, link }) => (
                  <li key={id} className='py-2 text-lg font-medium cursor-pointer hover:text-primary'>
                    <a onClick={() => setNav(false)} duration={500} offset={-75}>
                      {link}
                    </a>
                  </li>
                ))
              }
              <div className='flex items-center'>
                <button className='capitalize font-medium px-5 py-2 my-3 bg-primary text-white rounded-md' >contact us</button>
              </div>
            </ul>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;
