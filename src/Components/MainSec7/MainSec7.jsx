import React from 'react'
import './MainSec7.css'
import media1 from '../../assets/Image/media1.png'
import media2 from '../../assets/Image/media2.png'

export default function MainSec7() {
  return (
    <div className='MainSec7'>
      <h2 className="Sec7Head">Media</h2>
      <div className="Sec7Card">
        <div className="mainData">
            <img src={media1} alt="" className="mediaImage" />
            <p className="mediaText">
            How did two friends find innovation to solve an issue faced by a niche of the specially-abled while binge-watching with snacks during the wee hours?
            </p>
        </div>
        <a href='' className="review">
        The second episode of #SolveforTomorrow, a CSR initiative by Samsung India, is here! Get ready to meet our first two from the Top 10 teams- Able Innovation from Amravati, Maharashtra.
        </a>
      </div>
      <div className="Sec7Card">
        <div className="mainData">
            <img src={media2} alt="" className="mediaImage" />
            <p className="mediaText">
            How did two friends find innovation to solve an issue faced by a niche of the specially-abled while binge-watching with snacks during the wee hours?
            </p>
        </div>
        {/* <a className="review">
        The second episode of #SolveforTomorrow, a CSR initiative by Samsung India, is here! Get ready to meet our first two from the Top 10 teams- Able Innovation from Amravati, Maharashtra.
        </a> */}
      </div>
    </div>
  )
}
