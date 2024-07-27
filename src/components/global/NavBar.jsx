import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/global/navbar.css'

export default function NavBar() {
    return (
        <div className='navBar'>
            <div className="logo">
                <h2>Furry Finds</h2>
            </div>
            <div className="navList">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </div>
    )
}
