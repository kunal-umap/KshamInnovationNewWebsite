import React from 'react'
import './NavBar.css'
import imge from '../../assets/Image/ablelogo.png';
export default function NavBar() {
  return (
    <div className='NavBar'>
      <div className="NavLeft">
        <img className='logo' src={imge} alt={imge} />
      </div>
      <div className="NavRight">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact Us</a>
      </div>
    </div>
  )
}
