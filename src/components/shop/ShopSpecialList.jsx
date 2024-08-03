import React, { forwardRef } from 'react'
import { items } from './helper/SpecialList'
import Card from './Component/Card/Card'
import '../../styles/Shop/ShopSpecialList.css'

const ShopSpecialList = forwardRef((props, ref) => {
  return (
    <div className='Special-list-shop' ref={ref}>
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
})

export default ShopSpecialList
