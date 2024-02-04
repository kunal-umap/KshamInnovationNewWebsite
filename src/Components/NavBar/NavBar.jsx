import React, { useState } from 'react'
import './NavBar.css'
import imge from '../../assets/Image/ablelogo.png';
import { Link } from 'react-router-dom';
import line from '../../assets/logos/threeLine.png'
import cross from '../../assets/logos/cross.png'



export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const handleShowNavbar = () => {
    setShowNav(!showNav);
  }

  return (
    <div className='NavBar'>
      <div className="NavLeft">
        <img className='logo' src={imge} alt={imge} />
      </div>
      <div className={`NavRight ${showNav && 'actNav'}`} >
        <Link className='a' to={'/'} >Home</Link>
        <Link className='a' to={'/About'} >About</Link>
        <Link className='a' to={'/Contact'} >Contact Us</Link>
        {/* <a className='a' target='_blank' href="https://kunal-umap.github.io/Morse_converter/">Morse Code</a> */}
      </div>
      <button className="clickable" onClick={handleShowNavbar}>
        <img src={line} alt="" className={`line3 ${showNav && 'disAble'}`} />
        <img src={cross} alt="" className={`line3  ${!showNav && 'disAble'}`} />
      </button>
    </div>
  )
}