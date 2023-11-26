import React from 'react'
import './AboutPage.css'
import AboutSec1 from '../../Components/AboutSec1/AboutSec1'
import AboutSec2 from '../../Components/AboutSec2/AboutSec2'
import AboutSec3 from '../../Components/AboutSec3/AboutSec3'

export default function AboutPage() {
  return (
    <div className='AboutPage'> 
      <AboutSec1/>
      <AboutSec2/>
      <AboutSec3/>
    </div>
  )
}
