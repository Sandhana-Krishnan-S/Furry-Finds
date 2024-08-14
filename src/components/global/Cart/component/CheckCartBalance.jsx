import React from 'react'
import { useCart } from '../../../../contexts/CartContext'
import arrowIcon from '../../../../assets/images/Arrow.png'
import './style/CheckCartBalance.css'
import { useNavigate } from 'react-router'

export default function CheckCartBalance() {
    const navigate = useNavigate()
    const { cartItems } = useCart()
    const handleCheckout = () => {
        navigate('/checkout');
    }
    const subTotal = cartItems.reduce(
        (total, item) => (total = total + item.price * item.count),
        0
    )
    const shippingFee = 5
    const totalSum =  parseFloat(shippingFee + subTotal).toFixed(2)

  return (
    <div className='CheckCartBalance'> 
      <div className="Cart-line-detail"></div>
      <div className="CheckCartBalance-list">
        <ul>
            <li>
                <div className='CheckCartBalance-content-list'>
                    <p>SubTotal</p>
                    <p>${subTotal}</p>
                </div>
            </li>
            <li>
                <div className='CheckCartBalance-content-list'>
                    <p>Shipping</p>
                    <p>${shippingFee}</p>
                </div>
            </li>
            <li>
                <div className='CheckCartBalance-content-list'>
                    <p>Total(Tax incl.)</p>
                    <p>${totalSum}</p>
                </div>
            </li>
        </ul>
        <button className='CheckCartBalance-checkout-btn'>
            <div onClick={handleCheckout}>
                <p>Checkout</p>
                <img src={arrowIcon} alt="" />
            </div>
        </button>
      </div>
    </div>
  )
}
