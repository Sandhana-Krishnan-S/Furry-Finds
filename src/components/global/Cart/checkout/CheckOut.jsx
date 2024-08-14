import React from 'react';
import './checkout.css';
import { useCart } from '../../../../contexts/CartContext';
import NavBar from '../../NavBar';
import Footer from '../../Footer';

export default function Checkout() {
    const { cartItems } = useCart();

    const subTotal = cartItems.reduce(
        (total, item) => (total = total + item.price * item.count),
        0
    )
    const shipping = 5; // Flat shipping rate
    const total = subTotal + shipping;

    const handleCheckout = (e) => {
        e.preventDefault();
        // Add checkout logic here
        alert("Order placed successfully!");
    };

    return (
        <>
            <NavBar />
            <div className="checkout-container">
                <h1>Checkout</h1>
                <div className="checkout-page">
                <div className="order-summary">
                    <h3>Your Order</h3>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <span>{item.title} (x{item.count})</span>
                                <span>${(item.price * item.count).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="summary-totals">
                        <p>Subtotal: <span>${subTotal.toFixed(2)}</span></p>
                        <p>Shipping: <span>${shipping.toFixed(2)}</span></p>
                        <p>Total (Tax incl.): <span>${total.toFixed(2)}</span></p>
                    </div>
                </div>
                <form onSubmit={handleCheckout} className="checkout-form">
                    <h3>Payment Details</h3>
                    <input type="text" placeholder="Card Number" required />
                    <input type="text" placeholder="Card Holder Name" required />
                    <input type="text" placeholder="Expiration Date (MM/YY)" required />
                    <input type="text" placeholder="CVV" required />
                    <h3>Shipping Address</h3>
                    <input type="text" placeholder="Full Name" required />
                    <input type="text" placeholder="Address Line 1" required />
                    <input type="text" placeholder="Address Line 2" />
                    <input type="text" placeholder="City" required />
                    <input type="text" placeholder="State" required />
                    <input type="text" placeholder="Zip Code" required />
                    <input type="text" placeholder="Country" required />
                    <button type="submit" className="checkout-button">Place Order</button>
                </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
