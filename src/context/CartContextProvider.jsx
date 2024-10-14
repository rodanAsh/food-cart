import { createContext } from "react";
import products from '../assets/products.json'
import { useState } from "react";

export const CartContext = createContext(null)

{/* function to get default cartitems as a object */}
const getDefaultCart = () => {
    let cart = {};
    for(let index=0; index<products.length; index++){
        cart[index] = 0;
    }
    // console.log(cart);
    return cart;
}

const CartContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart())

    {/* function to add an item to cart*/}
    const handleAddCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] + 1}))

        console.log(cartItems)
    }

    {/* function to remove an item from cart */}
    const handleRemoveCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId] - 1}))
    }

    {/* function to get total item in cart */}
    const getTotalItem = () => {
        let totalItem = 0;
        for(let item in cartItems){
            if(cartItems[item] >0){
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }

    {/* function to calculate total amount in the cart */}
    const getTotalAmount = () => {
        let totalAmount = 0;

        for(let item in cartItems){
            if(cartItems[item] > 0){
                const itemInfo = products.find(p => p.id === Number(item))
                totalAmount += itemInfo.amt * cartItems[item]
            }
        }

        return totalAmount;
    }

    const value = {
        products,
        cartItems, setCartItems,
        handleAddCart, handleRemoveCart,
        getTotalItem, getTotalAmount
    }

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;