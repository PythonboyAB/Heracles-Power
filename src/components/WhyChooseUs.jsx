import React from 'react'
import { MdSportsGymnastics } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { MdOutlineTimer } from "react-icons/md";

export const WhyChooseUs = () => {
  return (
    <>
    {/* main container div */}
    <div className='w-screen '>

        {/* upper container carrying title and description */}
        <div className='flex flex-col justify-center items-center py-6 gap-2 '> 
            <h1 className='md:text-4xl font-bold'>Why choose Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi adipisci optio sed deserunt accusantium expedita perferendis quasi fuga dolorum. Fuga.</p>
        </div>

        {/* lower div container carrying 2 div one is written cards and 2nd is image div */}
        <div className='w-screen flex border-2 border-green-400 flex-wrap'>
            {/* description card div  */}
            <div className='md:w-1/2 md:flex md:flex-wrap gap-4 md:pl-7'>
                <div className=' flex md:w-72 gap-2'>
                <MdSportsGymnastics className='text-[100px]'/>
                <div>
                    <h1 className='font-bold md:text-xl'>Trainer Qualifications</h1>
                    <p className='text-[.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptates?</p>
                </div>
                
                </div>
                <div className=' flex md:w-72 gap-2'>
                <CgGym className='text-[100px]'/>
                <div>
                    <h1 className='font-bold md:text-xl'>Facility Amenities</h1>
                    <p className='text-[.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptates?</p>
                </div>
                
                </div>
                <div className=' flex md:w-72 gap-2'>
                <RiMoneyRupeeCircleFill className='text-[100px]'/>
                <div>
                    <h1 className='font-bold md:text-xl'>Member Cost</h1>
                    <p className='text-[.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptates?</p>
                </div>
                
                </div>
                <div className=' flex md:w-72 gap-2'>
                <MdOutlineTimer className='text-[100px]'/>
                <div>
                    <h1 className='font-bold md:text-xl'>Operating Hours</h1>
                    <p className='text-[.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptates?</p>
                </div>
                
                </div>

            </div>
            <div className=' md:w-1/2'>
                <h1>image div</h1>
            </div>
        </div>
    </div>
    
    </>
  )
}
