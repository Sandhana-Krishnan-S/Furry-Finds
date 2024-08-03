import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
    };

    const removeItem = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
