import React, { createContext, useContext, useState } from 'react'

const WishListContext = createContext()

export const useWhishList = () => {
    return useContext(WishListContext)
}

export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([])
    const [wishListId, setWishListId] = useState(new Set())

    const addWishList = (item) => {
        setWishList((previousItem) =>
            [...previousItem, item]
        )
        setWishListId((prevSet) => new Set(prevSet).add(item.id))
    }

    const removeWishList = (itemId) => {
        setWishList((previousItem) => {
            return previousItem.filter((wishItem) => wishItem.id !== itemId)
        })
        setWishListId((prevSet) => {
            const newSet = new Set(prevSet)
            newSet.delete(itemId)
            return newSet
        })
    }

    const wishHandler = (isWished , item) => {
        isWished ? removeWishList(item.id) : addWishList(item)
      }
    

    return (
        <WishListContext.Provider value={{ wishList, wishListId, addWishList, removeWishList, wishHandler }}>
            {children}
        </WishListContext.Provider>
    )
}
