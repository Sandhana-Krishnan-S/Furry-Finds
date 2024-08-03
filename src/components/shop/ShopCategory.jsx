import React from 'react'
import { CategoryImg } from './helper/CategoryHolder'
import '../../styles/Shop/ShopCategory.css'
import { useNavigate } from 'react-router-dom';

export default function ShopCategory() {
    const Navigate = useNavigate()
    return (
        <div className='shop-category-list'>
            <div className="heading">
                <div className="head-heading">
                    <div className="blob"></div>
                    <h3>Categories</h3>
                </div>
                <h2>Browse By Category</h2>
            </div>
            <div className="list-card">
                <ul>
                    <li>
                        <div className="category-card" onClick={() => {Navigate('/shop/pets')}}>
                            <img src={CategoryImg.Category1} alt="" />
                            <h3>Pets</h3>
                        </div>
                    </li>
                    <li>
                        <div className="category-card" onClick={() => {Navigate('/shop/accessory')}}>
                            <img src={CategoryImg.Category2} alt="" />
                            <h3>Accessory</h3>
                        </div>
                    </li>
                    <li>
                        <div className="category-card" onClick={() => {Navigate('/shop/gadget')}}>
                            <img src={CategoryImg.Category3} alt="" />
                            <h3>Gadget</h3>
                        </div>
                    </li>
                    <li>
                        <div className="category-card" onClick={() => {Navigate('/shop/food')}}>
                            <img src={CategoryImg.Category4} alt="" />
                            <h3>Foods</h3>
                        </div>
                    </li>
                    <li>
                        <div className="category-card" onClick={() => {Navigate('/shop/aquatic')}}>
                            <img src={CategoryImg.Category6} alt="" />
                            <h3>Aquatic</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
