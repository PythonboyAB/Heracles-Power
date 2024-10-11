import React from 'react'
import { GainLossCalculator } from './GainLossCalculator'
import { Navbar } from '../../components/Navbar'
import BgImg from "../../assets/Bmi-BG.jpeg"

export const BmiScreen = () => {
  return (
    <>
    <div className='h-screen' style={{ backgroundImage: `url(${BgImg} )) ` }}>

    <Navbar/>
    <div className='pt-[5%] ml-[5%]'>

    <GainLossCalculator/>
    </div>
    </div>
    </>
  )
}
