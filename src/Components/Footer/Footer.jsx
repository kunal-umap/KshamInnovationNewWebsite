import React from 'react'
import './Footer.css'
import Flogo from '../../assets/logos/footlogo.png'
import insta from '../../assets/logos/instagram icon.png'
import linkedin from '../../assets/logos/linkedin logo.png'

export default function Footer() {
  return (
    <div className='Footer'>
      <div className="foot1">
        <img src={Flogo} alt="" className="fiiterLogo" />
        <p className="copyright">Copyright © Ksham Innovation 2023. All Rights Reserved.</p>
      </div>
      <div className="foot2">
        <a href="">Privacy Policy</a>|
        <a href="">Trademark</a>|
        <a href="">Patent</a>
      </div>
      <div className="foot3">
        <p className="socialText">
            Follow Us On
        </p>
        <a href="" className="social"><img src={linkedin} alt="" /></a>
        <a href="" className="social"><img src={insta} alt="" /></a>
      </div>
    </div>
  )
}
