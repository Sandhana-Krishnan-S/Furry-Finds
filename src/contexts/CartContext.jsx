import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [trigger, setTrigger] = useState("");

    useEffect(() => {
        const fetchCartItems = async () => {
          setCartItems([])
            const user = JSON.parse(localStorage.getItem("userData"));
            console.log("Fetching cart items");
            try {
                const res = await axios.get(`http://localhost:8080/api/cart/get-by-user?userId=${user.userId}`);
                if (res.status === 200) {
                    const cartData = res.data;
                    cartData.forEach(item => {
                        setItem(item.product, item.count);
                    });
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };
        fetchCartItems();
    }, [trigger]);

    const setItem = (item, count) => {
        setCartItems(prevCartItems => {
            const itemExists = prevCartItems.find(cartItem => cartItem.id === item.id);
            if (itemExists) {
                return prevCartItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, count: (cartItem.count || 0) + count }
                        : cartItem
                );
            } else {
                return [...prevCartItems, { ...item, count: count || 1 }];
            }
        });
    };

    const addItem = async (item, count) => {
        const user = JSON.parse(localStorage.getItem("userData"));
        const productId = item.id;
        const itemCount = count || 1;

        const url = `http://localhost:8080/api/cart/add-cart?userId=${user.userId}&productId=${productId}&count=${itemCount}`;

        try {
            const response = await axios.post(url);
            if (response.status === 200) {
                console.log("Item added successfully");
                setItem(item, itemCount);
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const removeItem = async (id) => {
      const user = JSON.parse(localStorage.getItem("userData"));
      const url = `http://localhost:8080/api/cart/delete-item?userId=${user.userId}&productId=${id}`;
  
      try {
          const response = await axios.delete(url);
          if (response.status === 204) {
              setCartItems([])
              setTrigger(trigger + ".")
              console.log("Item removed successfully");
          }
      } catch (error) {
          console.error('Error removing item from cart:', error);
      }
  };

  const increase = async (id) => {
    const user = JSON.parse(localStorage.getItem("userData"));
    const url = `http://localhost:8080/api/cart/increment-cart?productId=${id}&userId=${user.userId}`;
  
    try {
        const response = await axios.put(url);
        if (response.status === 200) {
            setCartItems(prevCartItems => 
                prevCartItems.map(cartItem =>
                    cartItem.id === id
                        ? { ...cartItem, count: (cartItem.count || 0) + 1 }
                        : cartItem
                )
            );
            console.log("Item count increased successfully");
        }
    } catch (error) {
        console.error('Error increasing item count:', error);
    }
};


const decrease = async (id) => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const url = `http://localhost:8080/api/cart/decrement-cart?productId=${id}&userId=${user.userId}`;

  try {
      const response = await axios.put(url);
      if (response.status === 200) {
          setCartItems(prevCartItems => {
              const updatedCartItems = prevCartItems.map(cartItem => {
                  if (cartItem.id === id) {
                      const newCount = (cartItem.count || 1) - 1;
                      return newCount > 0
                          ? { ...cartItem, count: newCount }
                          : null;
                  }
                  return cartItem;
              });
              return updatedCartItems.filter(cartItem => cartItem !== null);
          });
          console.log("Item count decreased successfully");
      }
  } catch (error) {
      console.error('Error decreasing item count:', error);
  }
};


    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem, increase, decrease }}>
            {children}
        </CartContext.Provider>
    );
};
