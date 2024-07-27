import React from 'react'
import contentCover from '../../assets/images/content-cover.png'
import '../../styles/Home/HomeContent.css'

export default function HomeContent() {
    return (
        <div className='home-contnt-why'>
            <div className="left-content">
                <h2>Why Choose Furry Finds?</h2>
                <div className="para">
                    <h3>Wide Selection of Pet Products:</h3>
                    <p>We offer a vast array of products for all types of pets, including dogs, cats, birds, reptiles, and small animals. Our shelves are stocked with the latest pet food, toys, bedding, and accessories from trusted brands to ensure your pets get the best.</p>
                </div>
                <div className="para">
                    <h3>Pet Adoption Services:</h3>
                    <p>Looking to expand your family with a new pet? We collaborate with local shelters and rescue groups to help find loving homes for pets in need. Visit our adoption center to meet your potential new best friend.</p>
                </div>
            </div>
            <div className="right-img">
                <img src={contentCover } alt="" />
            </div>
        </div>
    )
}
