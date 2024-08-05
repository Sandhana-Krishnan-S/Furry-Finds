import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Card from '../../shop/Component/Card/Card'
import { useWhishList } from '../../../contexts/WhishListContext'
import emptyWish from '../../../assets/images/emptyWish.png'
import './WishList.css'

export default function WishList() {
    const { wishList } = useWhishList()

    const totalWishCount = wishList.reduce(
        (total, item) => (total = total + item.count),
        0
    )
    return (
        <>
            <NavBar />
            <div className="wishList-content">
                <div className="heading-wishlist">
                    <div className="blob"></div>
                    <h2>Wishlist: </h2>
                </div>
                {totalWishCount === 0
                    ? <div className='empty-cart'>
                        <img src={emptyWish} alt="" />
                        <p>Wishlsit is Empty</p>
                    </div>
                    : <div className='listing'>
                        {wishList.map((previousItem) => {
                            return (
                                <Card
                                    key={previousItem.id}
                                    item={previousItem} />
                            )
                        })}
                    </div>}
            </div>
            <Footer />
        </>
    )
}
