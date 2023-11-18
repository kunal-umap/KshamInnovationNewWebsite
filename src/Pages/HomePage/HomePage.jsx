import React from 'react'
import './HomePage.css'
import HeroSection from '../../Components/HeroSection/HeroSection'
import MainSec2 from '../../Components/MainSec2/MainSec2'
import MainSec3 from '../../Components/MainSec3/MainSec3'
import MainSec4 from '../../Components/MainSec4/MainSec4'
import MainSec5 from '../../Components/MainSec5/MainSec5'
import MainSec6 from '../../Components/MainSec6/MainSec6'

export default function HomePage() {
  return (
    <div className='homePage'>
      <HeroSection/>
      <MainSec2/>
      <MainSec3/>
      <MainSec4/>
      <MainSec5/>
      <MainSec6/>
    </div>
  )
}
