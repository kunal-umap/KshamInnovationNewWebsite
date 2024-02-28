import React from 'react'
import './HeroSection.css'
import glass from '../../assets/Image/glass.png';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className='heroSection'>
        <h1 className='heroHeading'>
            World's 1st<br />
            Smart Aid<br />
            Glasses for
        </h1>
        <div className='heroSubHeading'>
            <h2>Deaf</h2> <div className='Dot'></div>
            <h2>Mute</h2> <div className='Dot'></div>
            <h2>Blind</h2>
        </div> 
        <div className="space"></div>
        {/* <a className='heroButton' href="">Get Early Access</a> */}
        <Link to={'/Contact'} className='heroButton'>Get Early Access</Link>
        <div className="circleHero"></div>
        <img className='glassImage' src={glass} alt="" />
    </div>
  )
}
