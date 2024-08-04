import React from 'react'
import { useCart } from '../../../contexts/CartContext'
import NavBar from '../NavBar'
import Footer from '../Footer'
import emptyCart from '../../../assets/images/empty-cart.png'
import './cart.css'
import CartCard from './component/CartCard'
import ShopSupportDetails from '../../shop/ShopSupportDetails'
import CheckCartBalance from './component/CheckCartBalance'

export default function Cart() {
    const { cartItems } = useCart()

    const totalCartCount = cartItems.reduce(
        (total, item) => (total = total + item.count),
        0
    )

    return (
        <>
            <NavBar />
            <div className="cart-title-content">
                <h1>Continue Shopping </h1>
                <div className="line"></div>
                <h3>Shopping cart</h3>
                <p>You have {totalCartCount} item in your cart</p>
            </div>
            <div>
                {cartItems.length === 0 ? (
                    <div className='empty-cart'>
                        <img src={emptyCart} alt="" />
                        <p>No Item Found</p>
                    </div>
                ) : (
                    <div>
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <CartCard item={item} />
                                </li>
                            ))}
                        </ul>
                        <CheckCartBalance />
                    </div>
                )}
            </div>
            <ShopSupportDetails />
            <Footer />
        </>
    )
}
