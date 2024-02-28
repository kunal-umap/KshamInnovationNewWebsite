import React from 'react'
import './MainSec2.css'
import sec2Img from '../../assets/Image/anim.mp4';

export default function MainSec2() {
  return (
    <div className='MainSec2'>
        <h2 className='Sec2Heading'>Why Able Innovation Exists</h2>
        <div className="Sec2Data">
            {/* <img className='Sec2Image' src={sec2Img} alt="" /> */}
            <video controls autoPlay={true} loop={true} muted className='Sec2Image' src={sec2Img} ></video>
            <div className="Sec2text">
                <ul>
                    <li>Globally, there are over 680 million people who are deaf, hard of hearing, mute, or blind.</li>
                    <li>India alone is home to more than 80 million individuals belonging to these diverse disability groups.</li>
                    <li>Sadly, an estimated 90% of these individuals lack access to education and often face poverty.</li>
                    <li>or these individuals, accessing essential information, education, and communication channels remains a significant challenge.</li>
                    {/* <li>We at Ksham Innovation envision to build the most accessible ecosystem of smart devices for the 680 million+ Deaf & Hard of hearing, mute and blind people across the globe.</li> */}
                </ul>
            </div>
        </div>
        
        <div className="Sec2Circle"></div>
    </div>
  )
}
