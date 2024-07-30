import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../../assets/images/Icon-Facebook.png'
import instagram from '../../assets/images/icon-instagram.png'
import linkedin from '../../assets/images/Icon-Linkedin.png'
import twitter from '../../assets/images/Icon-Twitter.png'
import send from '../../assets/images/icon-send.png'
import '../../styles/global/Footer.css'

export default function Footer() {
    return (
        <div className='footer-body'>
            <div className="footer-marign">
                <div className="footer-element-exclusive">
                    <h2>Exclusive</h2>
                    <h3>Subscribe</h3>
                    <p>Get 10% off your first order</p>
                    <div className="mail-field-footer">
                        <input type="email" name="mail" id="mail" />
                        <img src={send} alt="" srcSet="" />
                    </div>
                </div>
                <div className="footer-element-contact">
                    <h2>Support</h2>
                    <ul>
                        <li><span>12 Random place , Some City , State 0</span></li>
                        <li><span>FurryFinds@gmail.com</span></li>
                        <li><span>+91 - 7708621829</span></li>
                    </ul>
                </div>
                <div className="footer-element-account">
                    <h2>Account</h2>
                    <ul>
                        <li><Link to="/my-account">My Account</Link></li>
                        <li><Link to="/login">Login / Register</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>
                <div className="footer-element-support">
                    <h2>Support</h2>
                    <ul>
                        <li><Link to="/request-shelter">Request Shelter</Link></li>
                        <li><Link to="/adoption">Adoption</Link></li>
                        <li><Link to="/become-seller">Become a Seller</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-element-media">
                    <h2>Social Media</h2>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" /></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyrights">
                <div className="footer-line"></div>
                <p>&copy; Copyright Sandu 2024. All right reserved</p>
            </div>
        </div>
    )
}
