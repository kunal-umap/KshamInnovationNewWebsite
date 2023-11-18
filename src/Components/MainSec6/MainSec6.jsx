import React from 'react'
import './MainSec6.css'
import Carousel from '../Carousel/Carousel'
import star from '../../assets/Image/star.png'

export default function MainSec6() {
  return (
    <div className='MainSec6'>
      <div className="cover"></div>
      <h2 className="sec6Head">Testimonials</h2>
      <Carousel/>
      <div className="ratingContainer">
        <img src={star} alt="" className="starImage" />
        <img src={star} alt="" className="starImage" />
        <img src={star} alt="" className="starImage" />
        <img src={star} alt="" className="starImage" />
        <img src={star} alt="" className="starImage" />
      </div>
    </div>
  )
}
