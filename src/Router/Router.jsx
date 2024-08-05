import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import LoginMain from '../components/login/LoginMain'
import SignUpMain from '../components/register/SignUpMain'
import Shop from '../components/shop/Shop'
import AboutUs from '../components/aboutus/AboutUs'
import Pets from '../components/shop/category/Pets/Pets'
import Accessory from '../components/shop/category/Accessory/Accessory'
import Gadget from '../components/shop/category/Gadget/Gadget'
import FoodStore from '../components/shop/category/Food/FoodStore'
import Aquatic from '../components/shop/category/Aquatic/Aquatic'
import Cart from '../components/global/Cart/Cart'
import WishList from '../components/global/wishList/WishList'
import SingleProduct from '../components/shop/Component/products/SingleProduct'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/login' element = {<LoginMain />} />
            <Route path='/signup' element = {<SignUpMain />} />
            <Route path='/shop' element = {<Shop />} />
            <Route path='/shop/pets' element = {<Pets />} />
            <Route path='/shop/accessory' element = {<Accessory />} />
            <Route path='/shop/gadget' element = {<Gadget />} />
            <Route path='/shop/food' element = {<FoodStore />} />
            <Route path='/shop/aquatic' element = {<Aquatic />} />
            <Route path='/cart' element = {<Cart />} />
            <Route path='/wishlist' element = {<WishList />} />
            <Route path='/about' element = {<AboutUs />} />
            <Route path='/test/product' element = {<SingleProduct />} />
        </Routes>
    </BrowserRouter>
  )
}
