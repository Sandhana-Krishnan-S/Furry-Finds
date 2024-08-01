import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/global/navbar.css'
import { useAuth } from '../../contexts/AuthContext'
import CartIcon from '../../assets/images/cart-bag.png'
import UserIcon from '../../assets/images/user.png'
import WishListIcon from '../../assets/images/heart.png'

export default function NavBar() {
    const {isAuthenticated} = useAuth()
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
                    {!isAuthenticated ? <li><Link to="/signup">Sign Up</Link></li> : undefined}
                </ul>
            </div>
            {isAuthenticated ? 
            <div className="nav-islogin-div">
                <ul>
                    <li>
                        <Link>
                            <div className="nav-islogin-element">
                                <div className='nav-icon-cart'>
                                    <div className="nav-icon-login-cointainer">
                                        <div className="cart-count"><p>2</p></div>
                                        <div className="add-cart-count">
                                            <img src={CartIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="nav-islogin-element">
                                <div className='nav-icon-wishlist'>
                                    <div className="nav-icon-login-cointainer">
                                        <img src={WishListIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="nav-islogin-element">
                                <div className='nav-icon-profile'>
                                    <div className="nav-icon-login-cointainer">
                                        <img src={UserIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div> : undefined}
        </div>
    )
}
