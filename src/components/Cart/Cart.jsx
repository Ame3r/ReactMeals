import React,{useContext} from "react";
import styles from "../../styles/components/cart.module.css";
import { CartContext } from "../store/cart-context";
import Modal from "../UI/Modal";

const Cart = (props) => {
	// const cartItems = (
	// 	<>
	// 		{[
	// 			{
	// 				id: "m1",
	// 				name: "Sushi",
	// 				amount: 1,
	// 				price: 22.0,
	// 			},
	// 		].map((item) => (
	// 			<ul>{item.name}</ul>
	// 		))}
	// 	</>
	// );
    const cartCtx = useContext(CartContext);
	return (
		<Modal onClickBackdrop={props.onClickCloseBtn}>
			{cartCtx.items}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{cartCtx.totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button
					onClick={props.onClickCloseBtn}
					className={styles["button--alt"]}
				>
					Close
				</button>
				<button className={styles.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
