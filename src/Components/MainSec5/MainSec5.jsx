import React from 'react'
import './MainSec5.css'

// Support logo Imports
import supp1 from '../../assets/logos/supp1.png'
import supp2 from '../../assets/logos/supp2.png'
import supp3 from '../../assets/logos/supp3.png'
import supp4 from '../../assets/logos/supp4.png'
import supp5 from '../../assets/logos/supp5.png'

export default function MainSec5() {
  return (
    <div className='MainSec5'>
        <h2 className="Sec5Head">Our Supporters</h2>
        <div className="sec5Top">
            <img src={supp1} alt="" />
            <img src={supp2} alt="" />
            <img src={supp3} alt="" />
        </div>
        <div className="sec5bottom">
            <img src={supp4} alt="" />
            <img src={supp5} alt="" />
        </div>
      
    </div>
  )
}
