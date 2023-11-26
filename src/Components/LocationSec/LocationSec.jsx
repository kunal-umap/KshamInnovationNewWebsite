import React from 'react'
import './LocationSec.css'

export default function LocationSec() {
    return (
        <div className='LocSec'>
            <h2 className="LocHead">Location</h2>
            <div className="mainSec">
                <div className="locLef">
                    <div className="plc">
                        <h3>Incubation</h3>
                        <p>Delhi, Delhi 110016</p>
                    </div>
                    <div className="plc">
                        <h3>Headquarter</h3>
                        <p>Amravati, Maharashtra 444601</p>
                    </div>
                </div>
                <div className="locRig">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119270.56240581274!2d77.67934372465832!3d20.904067449363495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a67774bc15%3A0x3c7b3f78ca4f9635!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700990031003!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}
