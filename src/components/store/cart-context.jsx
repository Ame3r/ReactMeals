import React, { useState, createContext } from "react";

export const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
});


const CartContextProvider = (props) => {
    const addItemsHandler = item => {}
    const removeItemsHandler = id => {}

	const cartContent = {
        items: [],
        totalAmount: 0,
        addItems: addItemsHandler,
        removeItems: removeItemsHandler,
    }
	return (
		<CartContext.Provider value= {cartContent}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
