import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const [cratItems, setCartItems] = useState({});
const navigate = useNavigate();
const [search, setSearch] = useState('');
const [showSearch, setShowSearch] = useState(false);


const addToCart = async (itemId, size) => {

    if (!size){
        toast.error('Select Product Size');
        return;
        
    }

    let cartData = structuredClone(cratItems);

    if (cartData[itemId]) {

        if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;

        }
        else {
            cartData[itemId][size] = 1;
        }
    }
    else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
    }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems){
            for (const item in cartItems[items]){
                try {
                    if (cartItmes[items][item] > 0){
                        totalCount += cartItems[items][item]

                    }
                }
                catch(error){

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async(itemId, size, quantity) =>{
        let cartData = structuredClone(cratItems);
        cartData[itemId][size] = quantity;

        setCartItems(cartData);

    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems){
            let itemInfo = products.find((product) => product._id == items);
            for (const item in cartItems[items]){
                try{
                    if (cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }
                catch(error){
                }
            }
            return totalAmount;
    }


    // useEffect (() =>{
    //     console.log(cratItems)

    // }, [cratItems])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate

    }
}

