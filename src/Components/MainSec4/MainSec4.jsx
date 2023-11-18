import React from 'react'
import './MainSec4.css'
import sec4img from '../../assets/Image/vdo.png'

export default function MainSec4() {
  return (
    <div className='MainSec4'>
        <div className="sec4circle"></div>
        <h2 className='MainSec4Heading' >How Able Glasses Work</h2>
        <img className='sec4vdo' src={sec4img} alt="" />
    </div>
  )
}
