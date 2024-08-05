import React from 'react';
import wishlist from '../../../../assets/images/wishlistbtn.png'
import './Card.css';
import { Rating } from 'react-simple-star-rating';
import { useCart } from '../../../../contexts/CartContext';
import { useWhishList } from '../../../../contexts/WhishListContext';

export default function Card({ id, img, title, description, price }) {
  const { addItem } = useCart()
  const { addWhishList, removeWhishList } = useWhishList()
  return (
    <div className="Item-card">
      <div className="item-image-holder">
        <img src={img} alt="" className='item-card-img' />
        <div className="item-card-wishlist" onClick={() => {}}>
          <img src={wishlist} alt="" />
        </div>
      </div>
      <div className="item-card-content">
        <div className="item-card-left">
          <h4 className='title'>{title}</h4>
          <p className='description'>{description}</p>
          <div className="ratings-item">
            <div className="rating-stars">
              <Rating readonly = {true}  initialValue={3.5} size={20}/>
            </div>
            <div className="rating-count"><p>({123})</p></div>
          </div>
        </div>
        <div className="item-card-right">
          <p>${price}</p>
        </div>
      </div>
        <div className="item-card-buttons">
          <button className='add-Cart-btn' onClick={() => {addItem({ id, img, title, description, price })}}>Add to cart</button>
          <button className='view-more-btn'>View more</button>
        </div>
    </div>
  );
}
