import React from 'react'
import './ContactPage.css'
import ContactCard from '../../Components/ContactCard/ContactCard'
import imgcontact from '../../assets/logos/call.png'
import imgmail from '../../assets/logos/mail.png'
import LocationSec from '../../Components/LocationSec/LocationSec'


export default function ContactPage() {
  return (
    <div className='ContactPage'>
        <div className="conHero">
            <div className="back"></div>
            <h2 className="contHead">
                Get Early Access
            </h2>
            <ContactCard />
        </div>
        <div className="ContactSec">
            <div className="cont1">
                <a href="" className="contr">
                    <img src={imgcontact} alt="" /> Call Us&emsp;
                </a>|<a href="" className="contl">&emsp;+91 9373124725</a>
            </div>
            <div className="cont2">
                <a href="" className="contr">
                    <img src={imgmail} alt="" /> Email&emsp;
                </a>|<a href="" className="contl"> &emsp;kshaminnovation@gmail.com</a>
            </div>
        </div>
        <LocationSec />
    </div>
  )
}
