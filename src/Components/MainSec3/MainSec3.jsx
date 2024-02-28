import React from 'react'
import './MainSec3.css'
import Sec3Card from '../Sec3Card/Sec3Card'

import eare from '../../assets/cardImg/eare.png';
import eye from '../../assets/cardImg/eye.png';
import hand from '../../assets/cardImg/hand.png';
import spar from '../../assets/cardImg/spar.png';


export default function MainSec3() {
  return (
    <div className='MainSec3'>
        <div className="Sec3Left">
            <h2 className='Sec3Head'>
                Our Innovation
            </h2>
            <div className="Sec3Text">
                <p>Able glasses aims to provide smart aid glasses for Deaf, Mute and Blind.</p>
                <p>The Able glasses uses patented bone conduction to enable Deaf to Listen, interpret signs & acts as voice assist tool for the mute, the sensory audio-based information enables the blind to visualize.</p>
                <p>The open ear design makes able glasses a complete smart glasses device for everyone</p>
            </div>
            <a href="" className="Sec3btn">About Us</a>
        </div>
        <div className="Sec3Right">
          <div className="lCard">
              <Sec3Card 
                imag={eare}
                heading={"Glasses for Deaf & Hard of hearing"}
                point1={"Patented Dome Bone Conduction Transducer"}
                point2={"Arrays of Microphones "}
                point3={"Bluetooth & Rechargeable"}
              />
              <div className="midSpace"></div>
              <Sec3Card
                imag={hand}
                heading={"Glasses for Mute"}
                point1={"Real time sign language to audio conversion"}
                point2={"Pairs of side camera & speaker."}
                point3={"Offline processing"}
              />
          </div>
          <div className="rCard">
              <div className="space1"></div>
              <Sec3Card
                imag={eye}
                heading={"Glasses for Blind"}
                point1={"Objects & Face Recognition "}
                point2={"1080p front camera "}
                // point3={"Pair of LIDAR senors"}
              />
              <div className="midSpace"></div>
              <Sec3Card
                imag={spar}
                heading={"Smart Case"}
                point1={"Day long battery backup "}
                point2={"Desktop computer mode."}
              />
          </div>
        </div>
    </div>
  )
}