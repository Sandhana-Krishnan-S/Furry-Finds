import React from 'react'
import { Rating } from 'react-simple-star-rating'
import deleteIcon from '../../../../assets/images/Delete.png'
import './style/CartCard.css'
import { useCart } from '../../../../contexts/CartContext'

export default function CartCard({ item }) {
    const { removeItem , increase , decrease} = useCart()

    return (
        <div className='cart-card'>
            <div className="cart-card-content">
                <div className="img-holder-cart-card">
                    <img src={item.img} alt="" />
                </div>
                <div className="item-content-main">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="ratings-item">
                        <div className="rating-stars">
                            <Rating readonly={true} initialValue={item.rating || 4.5} allowFraction size={20} />
                        </div>
                        <div className="rating-count"><p>({123})</p></div>
                    </div>
                    <h4>${item.price}</h4>
                </div>
                <div className="cart-card-btns">
                    <div className="adder-remover-container">
                        <button onClick={() => decrease(item.id)}> - </button>
                        <p>{item.count}</p>
                        <button onClick={() => increase(item.id)}> + </button>
                    </div>
                    <div className="delete-all-from-cart" onClick={() => removeItem(item.id)}>
                        <img src={deleteIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className="line-cart"></div>
        </div>
    )
}
