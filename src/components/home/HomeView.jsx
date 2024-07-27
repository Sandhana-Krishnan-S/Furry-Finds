import React from 'react'
import HomeCover from '../../assets/images/Home-cover.png'
import '../../styles/Home/HomeView.css'


export default function HomeView() {
  return (
    <div className='main-cover'>
      <div className="main-content">
        <h4>Welcome to Furry Finds</h4>
        <h1>Your One-Stop Pet Paradise!</h1>
        <p>At Furry Finds, we know pets are family. We offer everything from premium food and stylish accessories to professional grooming, ensuring your furry, feathered, or scaly friends are always happy and healthy. We’re your one-stop shop for all your pet care needs.</p>
        <button type="button"><span>Shop Now</span></button>
      </div>
      <div className="main-image-cover">
        <img src={HomeCover} alt="" />
      </div>
    </div>
  )
}
