import React, { useState } from 'react'
import wishlist from '../../../../assets/images/wishlistbtn.png'
import wishlistActive from '../../../../assets/images/wishActive.png'
import './Card.css'
import { Rating } from 'react-simple-star-rating'
import { useCart } from '../../../../contexts/CartContext'
import { useWhishList } from '../../../../contexts/WhishListContext'
import { Slide, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export default function Card({item}) {
  const { addItem } = useCart()
  const { wishListId, wishHandler} = useWhishList()

  const isWished = wishListId.has(item.id)
  const [istoast, setIsToast] = useState(false)

  const cartbtnHandler = (event) => {
    event.stopPropagation()
    addItem(item)
    if(!istoast) {
      setIsToast(true)
      toast(`Item is added to cart`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "light",
        transition: Slide,
        onClose: () => setIsToast(false),
        icon: null
        })
    }
  }

  const wishbtnHandler = (event) => {
    event.stopPropagation()
    wishHandler(isWished , item)
  }

  return (
    <div className="Item-card" onClick={() => console.log("test")}>
      <div className="item-image-holder">
        <img src={item.img} alt="" className='item-card-img' />
        <div className="item-card-wishlist" onClick={wishbtnHandler}>
          <img src={isWished ? wishlistActive : wishlist} alt="" />
        </div>
      </div>
      <div className="item-card-content">
        <div className="item-card-left">
          <h4 className='title'>{item.title}</h4>
          <p className='description'>{item.description}</p>
          <div className="ratings-item">
            <div className="rating-stars">
              <Rating readonly = {true}  initialValue={3.5} size={20}/>
            </div>
            <div className="rating-count"><p>({123})</p></div>
          </div>
        </div>
        <div className="item-card-right">
          <p>${item.price}</p>
        </div>
      </div>
        <div className="item-card-buttons">
          <button className='add-Cart-btn' onClick={cartbtnHandler}>Add to cart</button>
          <button className='view-more-btn'>View more</button>
        </div>
    </div>
  );
}
