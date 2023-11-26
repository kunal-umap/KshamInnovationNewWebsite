import React from 'react'
import './Sec3Card.css'

export default function Sec3Card({imag, heading,point1,point2,point3,point4}) {
    return (
        <div className="Card">
            <div className="cardImage">
                <img src={imag} alt="G" />
            </div>
            <h3 className="cardHeading">{heading}</h3>
            <ul>
                {(point1!=""&&point1!=null)?<li>{point1} </li>:""}
                {(point2!=""&&point2!=null)?<li>{point2} </li>:""}
                {(point3!=""&&point3!=null)?<li>{point3} </li>:""}
                {(point4!=""&&point4!=null)?<li>{point4} </li>:""}
            </ul>
        </div>
    )
}
