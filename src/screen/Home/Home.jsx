import React from 'react'
import { LandingPage } from '../LandingPage'
import { Footer } from '../../components/Footer'
import { WhyChooseUs } from '../../components/WhyChooseUs'
import { TrainerSection } from '../../components/TrainerSection'

export const Home = () => {
  return (
    <>
    <LandingPage/>
    <WhyChooseUs/>
    <TrainerSection/>
    <Footer/>
    </>
  )
}
