import React from 'react'
import './HomePage.css'
import HeroSection from '../../Components/HeroSection/HeroSection'
import MainSec2 from '../../Components/MainSec2/MainSec2'
import MainSec3 from '../../Components/MainSec3/MainSec3'

export default function HomePage() {
  return (
    <div className='homePage'>
      <HeroSection/>
      <MainSec2/>
      <MainSec3/>
    </div>
  )
}
