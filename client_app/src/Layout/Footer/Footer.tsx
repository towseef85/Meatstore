import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <Fragment>
            <footer className="footer bg-white p-4">
                <div className="footer-section pt-4">
                    <div className="container">
                        <div className="row homeschool-footer">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <h1>EMG Foods</h1>
                                <p>We will sell only the meat that we would use for oruselves, at EMG we're big meat-lovers by big,
                                    we mean huge
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <h6>Useful Links</h6>
                                <ul className="list-unstyled">
                                    <li><Link to=''><i className="far fa-chevron-right"></i><span>Why EMG_Foods?</span></Link></li>
                                    <li><Link to=''><i className="far fa-chevron-right"></i><span>Careers</span></Link></li>
                                    <li><Link to=''><i className="far fa-chevron-right"></i><span>About Us</span></Link></li>
                                    <li><Link to=''><i className="far fa-chevron-right"></i><span>Refer & Earn</span></Link></li>
                                    <li><Link to=''><i className="far fa-chevron-right"></i><span>FSSC 22000 Certification</span></Link></li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <ul className="list-unstyled">
                                    <li><Link to=''><i className="far fa-chevron-right"></i><span>BLOG</span></Link></li>
                                    <li><Link to=''><i className="far fa-chevron-right"></i><span>Campaign</span></Link></li>
                                    <li><Link to=''><i className="far fa-chevron-right"></i><span>Our Partners</span></Link></li>
                                    <li><Link to=''><i className="far fa-chevron-right"></i><span>News</span></Link></li>
                                    <li><Link to=''><i className="far fa-chevron-right"></i><span>FAQ</span></Link></li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <ul className="list-unstyled">
                                    <li><Link to=''><i className="fab fa-facebook"></i><span>FACEBOOK</span></Link></li>
                                    <li><Link to=''><i className="fab fa-twitter-square"></i><span>TWITTER</span></Link></li>
                                    <li><Link to=''><i className="fab fa-instagram"></i><span>INSTAGRAM</span></Link></li>
                                    <li><Link to=''><i className="fab fa-youtube"></i><span>YOUTUBE</span></Link></li>
                                    <li><Link to=''><i className="far fa-newspaper"></i><span>NEWS LETTER</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                </div>                            
                    
               
            </footer>
            <div className="footer-bottom">
                    <div className="col-md-12 text-center">
                        2021 - 2024 &copy; EMG_Foods
                    </div>
                </div>
        </Fragment>
    )
}

export default Footer
