import React from 'react'
import { Link } from 'react-router-dom'


export const SignupCard = () => {
  return (
    <> 
    <div className='w-screen h-screen flex justify-end items-center '>
    <div className=' bg-white bg-opacity-80  md:mx-20 py-7 flex flex-col gap-2 px-7  rounded-2xl '>
      <div className='w-full flex justify-center items-center'>
        <h1 className='text-5xl py-3'>Signup</h1>
      </div>
      <div className='flex gap-2'>
      <input type="text" placeholder='Name' className='rounded-md px-3 py-1 w-40'/>
      <input type="text" placeholder='Last name' className='rounded-md px-3 py-1 w-40' />
      </div>
        <h1 className='text-lg font-medium'> Enter your Email</h1>
        <input className='rounded-md px-3 py-1 w-60'  type="email" placeholder='email'/>
        <h1 className='text-lg font-medium'>Enter you Password</h1>
        <input className='rounded-md px-3 py-1 w-60'  type="password" placeholder='Password'/>
        <h1 className='text-lg font-medium'>Confirm you Password</h1>
        <input className='rounded-md px-3 py-1 w-60'  type="password" placeholder='Password'/>
        <button className='bg-orange-600 rounded-md text-white block w-full py-1'>Register</button>
        <p>Already have an account?<Link to="/login" className='text-blue-600'> Login</Link></p>
       
    </div>
  </div>
    </>
  )
}
