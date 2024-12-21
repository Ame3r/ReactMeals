import React from "react";
import styles from "../../styles/components/CartItem.module.css";

const CartItem = (props) => {
	return (
		<li>
			<div className={styles["cart-items"]}>
				<h2>{props.name}</h2>
				<div className={styles.summary}>
					<span className={styles.price}>{`$${props.price}`}</span>
					<span className={styles.amount}>x {props.amount}</span>
				</div>
			</div>
			<div className={styles.actions}>
				<button onClick={props.onRemove}>-</button>
				<button onClick={props.onAdd}>+</button>
			</div>
		</li>
	);
};

export default CartItem;
