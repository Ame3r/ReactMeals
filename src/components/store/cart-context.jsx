import React, { useReducer, createContext } from "react";

export const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
});

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type == "ADD_ITEM") {
        const updatedItem = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)
        return {
            item : updatedItem,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultCartState;
}

const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemsHandler = item => {
        dispatchCartAction({ type: 'ADD_ITEM', item });
    }
    const removeItemsHandler = id => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id });
    }

	const cartContent = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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
