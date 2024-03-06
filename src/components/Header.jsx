import React from 'react';
import BannerImg from '../assets/Banner.png';

const Header = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 h-full p-10 bg-primary/10'>
                <div className='flex flex-col justify-center w-10/12 px-10 ml-10'>
                    <h2 className='font-semibold text-4xl'>Experienced <span className='text-primary'>mobile and web</span> applications and website builders measuring.</h2>
                    <p className='py-7 text-[#5C5C5C]'>WebNex TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                    <div className='flex mt-7 items-start'>
                        <button className='capitalize mx-1 px-8 py-2 bg-primary text-white rounded-md'>contact us</button>
                        <button className='capitalize mx-1 px-8 py-2 bg-white text-primary rounded-md border-[1px] border-primary'>view more</button>
                    </div>
                </div>

                <div className='flex justify-end items-center w-4/5'>
                    <img src={BannerImg} alt='BannerImg' />
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Header;
