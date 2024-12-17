import React from "react";
import CartIcon from "../../assets/CartIcon"
import styles from "../../styles/components/Cartbtn.module.css";

const CartBtn = props => {
    return (
			<button className={styles.btn} onClick={props.onClickCartBtn}>
				<span className={styles.icon}>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className={styles.badge}>3</span>
			</button>
		);
}

export default CartBtn;