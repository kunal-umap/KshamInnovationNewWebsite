import React from 'react'
import './NavBar.css'
import imge from '../../assets/Image/ablelogo.png';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className='NavBar'>
      <div className="NavLeft">
        <img className='logo' src={imge} alt={imge} />
      </div>
      <div className="NavRight">
        <Link className='a' to={'/'} >Home</Link>
        <Link className='a' to={'/About'} >About</Link>
        <Link className='a' to={'/Contact'} >Contact Us</Link>
        <a className='a' target='_blank' href="https://kunal-umap.github.io/Morse_converter/">Morse Code</a>
      </div>
    </div>
  )
}
