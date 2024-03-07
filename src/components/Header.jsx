import React from 'react';
import BannerImg from '../assets/Banner.png';
import { CgWebsite } from 'react-icons/cg';
import { FaTags } from "react-icons/fa";
import { LiaVrCardboardSolid } from "react-icons/lia";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const Header = () => {

    const services = [
        {
            id: 1,
            icon: <CgWebsite size={30} className='text-[#4628A4]' />,
            title: 'Web Applications',
            subtitle: 'lorem ipsum is simply',
            bgClass: 'bg-[#EFEAFF]'
        },
        {
            id: 2,
            icon: <FaTags size={30} className='text-[#5FC300]' />,
            title: 'SEO',
            subtitle: 'lorem ipsum is simply',
            bgClass: 'bg-[#ECFFDA]'
        },
        {
            id: 3,
            icon: <LiaVrCardboardSolid size={30} className='text-[#00329B]' />,
            title: 'AR/VR Solution',
            subtitle: 'lorem ipsum is simply',
            bgClass: 'bg-[#DAE6FF]'
            
        },
        {
            id: 4,
            icon: <HiOutlineDevicePhoneMobile size={30} className='text-[#BB3800] ' />,
            title: 'Mobile Applications',
            subtitle: 'lorem ipsum is simply',
            bgClass: 'bg-[#FFE5DA]'
        }
    ];

    return (
        <div>
            <div className='grid md:grid-cols-2 h-full p-10 bg-primary/10'>
                <div className='flex flex-col justify-center w-11/12 px-10 ml-5'>
                    <h2 className='font-semibold text-4xl'>Experienced <span className='text-primary'>mobile and web</span> applications and website builders measuring.</h2>
                    <p className='py-7 text-[#5C5C5C]'>WebNex TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                    <div className='flex mt-7 items-start'>
                        <button className='capitalize mx-1 px-8 py-2 bg-primary text-white rounded-md'>contact us</button>
                        <button className='capitalize mx-1 px-8 py-2 bg-white text-primary rounded-md border-[1px] border-primary'>view more</button>
                    </div>
                </div>

                <div className='flex justify-end items-center w-full'>
                    <img src={BannerImg} alt='BannerImg' />
                </div>
            </div>

            <div className='flex items-center justify-center py-7 border-b-[1px] border-gray-300 mb-20'>
                {
                    services.map(({ id, icon, title, subtitle, bgClass }) => (
                        <div key={id} className='flex items-center justify-center mx-5'>
                            <div className={`flex items-center justify-center mx-3 p-5 rounded-full shadow-lg shadow-gray-400 ` + bgClass }>
                                {icon}
                            </div>
                            <div className='p-2'>
                                <h3 className='font-medium text-lg'>{title}</h3>
                                <p className='text-[#969696]'>{subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header;
