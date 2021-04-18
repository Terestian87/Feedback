import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-div">
            <nav className="navbar">
                <div className="nav-left">
                    <h2>Titolo app</h2>
                </div>
                <div className="nav-right">
                    <ul>
                        <li><Link className="nav-link" to="/">Share Feedback</Link></li>
                        <li><Link className="nav-link" to="my-feedback">Completed Feedbacks</Link></li>
                        <li>altra pagina ancora</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
