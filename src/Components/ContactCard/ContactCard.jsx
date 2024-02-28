import React from 'react'
import './ContactCard.css'
import cardImg from '../../assets/Image/cardLeft.png'

export default function ContactCard() {
  return (
    <div className='ContactCard'>
      <form target='_blank' action="https://formsubmit.co/kunalumap0123@gmail.com" method="POST">
        <h2 className="ContactCardHead">Your satisfaction is our number one focus</h2>
        <p className="contactSubTitle">Please fill in your details below and one of our friendly team members will be in touch shortly.</p>
        <div className="cardForm">
            <div className="formLeft">
                <input placeholder='First Name' type="text" name="Name" id="" />
                <input placeholder='Last Name' type="text" name="Last Name" id="" />
                <input placeholder='Mobile No.' type="text" name="Mobile no" id="" />
                <input placeholder='Email' type="text" name="email" id="" />
                <textarea placeholder='What do you want to tell us?' name="" id="" cols="" rows="6"></textarea>
            </div>
            <div className="formRight">
                <img src={cardImg} alt="" />
            </div>
        </div>
        <button type='submit' className='formSubmit'>Submit</button>
        </form>
    </div>
  )
}
