import React from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {

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
    <div className='w-full z-20 fixed'>

      <div className='px-5 flex items-center justify-between w-full h-full'>

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
          <div className='cursor-pointer text-primary'>
            <HiOutlineMenuAlt2 onClick={() => setNavigation(true)} size={25} />
          </div>
        </div>

      </div>

      {/* mobile menu  */}


    </div>
  )
}

export default Navbar;
