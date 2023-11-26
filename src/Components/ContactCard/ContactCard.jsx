import React from 'react'
import './ContactCard.css'
import cardImg from '../../assets/Image/cardLeft.png'

export default function ContactCard() {
  return (
    <div className='ContactCard'>
        <h2 className="ContactCardHead">Your satisfaction is our number one focus</h2>
        <p className="contactSubTitle">Please fill in your details below and one of our friendly team members will be in touch shortly.</p>
        <div className="cardForm">
            <div className="formLeft">
                <input placeholder='First Name' type="text" name="" id="" />
                <input placeholder='Last Name' type="text" name="" id="" />
                <input placeholder='Mobile No.' type="text" name="" id="" />
                <input placeholder='Email' type="text" name="" id="" />
                <textarea placeholder='What do you want to tell us?' name="" id="" cols="" rows="6"></textarea>
            </div>
            <div className="formRight">
                <img src={cardImg} alt="" />
            </div>
        </div>
        <button className='formSubmit'>Submit</button>
    </div>
  )
}
