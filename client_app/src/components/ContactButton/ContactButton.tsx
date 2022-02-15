import React from 'react'
import './ContactButton.css';

function ContactButton() {
    return (
        <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Contact Us
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item" href="#">1800-1111-786</a></li>
                <li><a className="dropdown-item" href="#">care@emgfoods.com</a></li>
            </ul>
        </div>
    )
}

export default ContactButton
