import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const WishListContext = createContext();

export const useWhishList = () => {
    return useContext(WishListContext);
};

export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([]);
    const [wishListId, setWishListId] = useState(new Set());
    useEffect(() => {
        const fetchWishList = async () => {
            console.log("test")
            setWishList([]);
            const user = JSON.parse(localStorage.getItem("userData"));
            if (!user) return; 
    
            try {
                console.log(user.userId)
                const response = await axios.get(`http://localhost:8080/api/wish-list/get?userId=${user.userId}`);
                if (response.status === 200) {
                    const data = response.data;
                    setWishList(data);
                    setWishListId(new Set(data.map(item => item.id)));
                }
            } catch (error) {
                console.error('Error fetching wish list:', error);
            }
        };
    
        fetchWishList();
    }, []); 

    const addWishList = async (item) => {
        const user = JSON.parse(localStorage.getItem("userData"));
        const url = `http://localhost:8080/api/wish-list/add?userId=${user.userId}&productId=${item.id}`;

        try {
            const response = await axios.post(url);
            if (response.status === 200) {
                setWishList((previousItems) => [...previousItems, item]);
                setWishListId((prevSet) => new Set(prevSet).add(item.id));
            }
        } catch (error) {
            console.error('Error adding item to wish list:', error);
        }
    };

    const removeWishList = async (itemId) => {
        const user = JSON.parse(localStorage.getItem("userData"));
        const url = `http://localhost:8080/api/wish-list/delete?userId=${user.userId}&productId=${itemId}`;

        try {
            const response = await axios.delete(url);
            if (response.status === 204) {
                setWishList((previousItems) => previousItems.filter((wishItem) => wishItem.id !== itemId));
            }
        } catch (error) {
            console.error('Error removing item from wish list:', error);
        }
    };

    const wishHandler = (isWished, item) => {
        isWished ? removeWishList(item.id) : addWishList(item);
    };

    return (
        <WishListContext.Provider value={{ wishList, wishListId, addWishList, removeWishList, wishHandler }}>
            {children}
        </WishListContext.Provider>
    );
};
