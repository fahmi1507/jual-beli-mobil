import React from 'react'
import './navbar.styles.css'
import logo from '../../images/logo1.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-content-container">
                <Link to='/'>
                    <img src={logo} className="nav-img" alt="logo" width={130} height={33} />
                </Link>
                <Link to='/'>
                    <div className="navbar-text-container">
                        <p>Mobil Bekas</p>
                    </div>
                </Link>

                <Link to='/jual'>
                    <div className="navbar-text-container">
                        <p>Jual</p>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar