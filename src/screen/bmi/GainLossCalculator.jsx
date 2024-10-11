import React, { useState } from 'react'

export const GainLossCalculator = () => {
    const [isYearly, setIsYearly] = useState(false);
  return (
    <>
    {/* main div */}
        
    <div className='md:w-1/4 border-2 border-slate-700 '>
    <div>
        {/* gain loss toggle button  */}
    <div className='w-full flex justify-center items-center'>            
            <div className="inline-flex items-center bg-gray-200 rounded-full p-1">
              <button
                className={`px-2 py-1 rounded-full transition ${
                  !isYearly ? "bg-white text-black" : "text-gray-500"
                }`}
                onClick={() => setIsYearly(false)}
              >
                Gain
              </button>
              <button
                className={`px-2 py-1 rounded-full transition ${
                  isYearly ? "bg-black text-white" : "text-gray-500"
                }`}
                onClick={() => setIsYearly(true)}
              >
                Loss
              </button>
            </div>
          </div>
    </div>
    <div>
        <h6>Gender</h6>
        <input type="radio" name='gender' value="Male"/>
        <label htmlFor="Male">Male</label>
        <input type="radio" name='gender' value="Female" />
        <label htmlFor="Female">Female</label>
    </div>
    <div className='flex'>
        <input type="text" placeholder='Enter your age' className='border-2 border-slate-500'/>
        <p className='bg-green-600 text-white p-1'>CM</p>
    </div>
    <div className='flex'>
        <input type="text" placeholder='Enter your current weight' className='border-2 border-slate-500'/>
        <p className='bg-green-600 text-white p-1'>KG</p>
    </div>
    <div className='flex'>
        <input type="text" placeholder='Enter your goal weight' className='border-2 border-slate-500'/>
        <p className='bg-green-600 text-white p-1'>KG</p>
    </div>

    </div>

    </>
  )
}
