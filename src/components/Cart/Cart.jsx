import React from "react";
import styles from "../../styles/components/cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
	const cartItems = (
		<>
			{[
				{
					id: "m1",
					name: "Sushi",
					amount: 1,
					price: 22.0,
				},
			].map((item) => (
				<ul>{item.name}</ul>
			))}
		</>
	);

    const closeCartHandler = e => {
        props.onClickCloseBtn();
    }

	return (
		<Modal>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>39.72</span>
			</div>
			<div className={styles.actions}>
				<button onClick= {closeCartHandler} className={styles["button--alt"]}>Close</button>
				<button className={styles.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
