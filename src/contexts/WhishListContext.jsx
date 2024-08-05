import React, { createContext, useContext, useState } from 'react'

const WishListContext = createContext()

export const useWhishList = () => {
    return useContext(WishListContext)
}

export const WishListProvider = ({children}) => {
    const [wishList , setWishList] = useState([])

    const addWhishList = (item) => {
        setWishList((previousItem) =>
            [...previousItem , item]
        )
    }
    const removeWhishList = (itemId) => {
        setWishList((previousItem) => {
            previousItem.filter((wishItem) => wishItem.id !== itemId)
        })
    }
  return (
    <WishListContext.Provider value={{ wishList, addWhishList , removeWhishList}}>
        {children}
    </WishListContext.Provider>
  )
}
