import React, { useContext } from "react";
import CartIcon from "../../assets/CartIcon"
import styles from "../../styles/components/Cartbtn.module.css";
import { CartContext } from "../store/cart-context";

const CartBtn = props => {
    const cartCtx = useContext(CartContext); 
    const noOfCartItems = cartCtx.items.reduce((currentVal, items) => { return currentVal + items.amount},0)
    return (
			<button className={styles.btn} onClick={props.onClickCartBtn}>
				<span className={styles.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={styles.badge}>{noOfCartItems}</span>
			</button>
		);
}

export default CartBtn;