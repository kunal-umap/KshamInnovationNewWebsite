import React from 'react'
import './MainSec3.css'


export default function MainSec3() {
  return (
    <div className='MainSec3'>
        <div className="Sec3Left">
            <h2 className='Sec3Head'>
                Our Innovation
            </h2>
            <div className="Sec3Text">
                <p>Ksham glasses aims to provide smart aid glasses for Deaf, Mute and Blind.</p>
                <p>The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret signs & acts as voice assist tool for the mute, the sensory audio-based information enables the blind to visualize.</p>
                <p>The open ear design makes able glasses a complete smart glasses device for everyone</p>
            </div>
            <a href="" className="Sec3btn">About Us</a>
        </div>
        <div className="Sec3Right">
          <div className="lCard">
              <div className="Card">
                <div className="cardImage">
                  <img src="" alt="G" />
                </div>
                <h3 className="cardHeading">Glasses for Deaf & Hard of hearing</h3>
                <ul>
                  <li>Patented Dome Bone Conduction Transducer </li>
                  <li>Five arrays of Microphones </li>
                  <li>Bluetooth 5.2 & Rechargeable</li>
                </ul>
              </div>
          </div>
          <div className="rCard">

          </div>
        </div>
    </div>
  )
}