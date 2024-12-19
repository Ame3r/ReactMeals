import React, { useContext } from "react";
import CartIcon from "../../assets/CartIcon"
import styles from "../../styles/components/Cartbtn.module.css";
import { CartContext } from "../store/cart-context";

const CartBtn = props => {
    const {items} = useContext(CartContext); 
    return (
			<button className={styles.btn} onClick={props.onClickCartBtn}>
				<span className={styles.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={styles.badge}>{items.length}</span>
			</button>
		);
}

export default CartBtn;