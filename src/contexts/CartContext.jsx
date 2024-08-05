import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => {
    return useContext(CartContext)
};


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    
      const addItem = (item) => {
        setCartItems((prevCartItems) => {
            const itemExists = prevCartItems.find((cartItem) => cartItem.id === item.id)
            return itemExists
              ? prevCartItems.map((cartItem) =>
                  cartItem.id === item.id
                    ? { ...cartItem, count: cartItem.count + 1 }
                    : cartItem
                )
              : [...prevCartItems, { ...item, count: 1 }]
          })
      }
    
      const removeItem = (id) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((cartItem) => cartItem.id !== id)
      )}
    
      const increase = (id) => {
        setCartItems((prevCartItems) => 
            prevCartItems.map((cartItem) =>
                cartItem.id === id
                  ? { ...cartItem, count: cartItem.count + 1 }
                  : cartItem
              )
        )
      }
    
      const decrease = (id) => {
        setCartItems((prevCartItems) => {
          const updatedCartItems = prevCartItems.map((cartItem) => {
            if (cartItem.id === id) {
              const newCount = cartItem.count - 1
              return newCount > 0
                ? { ...cartItem, count: newCount }
                : null
            }
            return cartItem
          })
          return updatedCartItems.filter((cartItem) => cartItem !== null);
        })
      }
      
    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, increase , decrease}}>
            {children}
        </CartContext.Provider>
    )
}