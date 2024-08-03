import React from 'react'
import { useCart } from '../../../contexts/CartContext'
import NavBar from '../NavBar'
import Footer from '../Footer'
import emptyCart from '../../../assets/images/empty-cart.png'
import './cart.css'

export default function Cart() {
    const { cartItems } = useCart()
    return (
        <>
            <NavBar />
            <div className="cart-title-content">
                <h1>Continue Shopping </h1>
                <div className="line"></div>
                <h3>Shopping cart</h3>
                <p>You have {cartItems.length} item in your cart</p>
            </div>
            <div>
                {cartItems.length === 0 ? (
                    <div className='empty-cart'>
                        <img src={emptyCart} alt="" />
                        <p>No Item Found</p>
                    </div>
                ) : (
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.name}
                                {/* Add more item details here if needed */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <Footer />
        </>
    )
}
