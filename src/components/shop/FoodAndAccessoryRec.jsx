import React from 'react'
import Item4 from '../../assets/images/Item3.png';
import Item6 from '../../assets/images/Item5.png';
import Item2 from '../../assets/images/img_product.png'
import Card from './Component/Card/Card'

export default function FoodAndAccessoryRec() {
    const items = [{
        img: Item4,
        title: 'Whiskas',
        description: 'Whiskas savory meals that is delicious.',
        price: 39.99
    }, {
        img: Item2,
        title: 'Buddy’s Bowl',
        description: 'Buddy’s Bowl is designed with style in mind. ',
        price: 49.99
    }, {
        img: Item6,
        title: 'Hemp Chewstix',
        description: 'Hemp Chewstix is natural chew toys promote dental health.',
        price: 89.99
    }, {
      img: Item4,
      title: 'Whiskas',
      description: 'Whiskas savory meals that is delicious.',
      price: 39.99
  }]
  return (
    <div className='Special-list-shop' style={{marginBottom: '64px'}}>
      <div className="heading-text">
        <h2>Special Just for you</h2>
      </div>
      <div className="listing">
      {items.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}
