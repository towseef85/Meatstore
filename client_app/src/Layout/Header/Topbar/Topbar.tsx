import React from 'react'
import { Link } from 'react-router-dom'

import ContactButton from '../../../components/ContactButton/ContactButton'
import './Topbar.css';



function Topbar() {
    return (
        <div id="topbar" className={'align-items-center bg-light'}>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="">
                        <Link to="#" className="topbar-link">
                            <span>Why EMG_Foods?</span>
                        </Link>
                        <Link to="#" className="topbar-link">
                            <span>Download App</span>
                            <i className="fab fa-apple"></i>
                            <i className="fab fa-google-play"></i>
                        </Link>
                    </div>
                    <div className="d-flex">
                        <Link to="#" className="topbar-link">
                            <span>FSSC 22000 Certification</span>
                        </Link>
                        <Link to="#" className="topbar-link">
                            <span>About Us</span>
                        </Link>
                        <Link to="#" className="topbar-link">
                            <span>Careers@EMG_Foods</span>
                        </Link>
                        <Link to="#" className="topbar-link">
                            <span><ContactButton /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div >   
    )
}

export default Topbar
