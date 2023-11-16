import React from 'react'
import './MainSec2.css'
import sec2Img from '../../assets/Image/cm.png';

export default function MainSec2() {
  return (
    <div className='MainSec2'>
        <h2 className='Sec2Heading'>Why Able Innovation Exists</h2>
        <div className="Sec2Data">
            <img className='Sec2Image' src={sec2Img} alt="" />
            <div className="Sec2text">
                <ul>
                    <li>Globally there are 680 million+ Deaf & Hard of hearing, Mute and Blind people.</li>
                    <li>India is home to over 80 million Deaf & Hard of hearing, mute & blind people.</li>
                    <li>Out of these 90% of people are uneducated and also lives under poverty.</li>
                    <li>To these people Accessibility to general sources of Information, Education and communication as well as the daily work of Deaf & Hard of hearing, mute and blind is still a Utopia.</li>
                    <li>We at Ksham Innovation envision to build the most accessible ecosystem of smart devices for the 680 million+ Deaf & Hard of hearing, mute and blind people across the globe.</li>
                </ul>
            </div>
        </div>
        
        <div className="Sec2Circle"></div>
    </div>
  )
}
