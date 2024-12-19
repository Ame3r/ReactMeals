import React,{useContext} from "react";
import styles from "../../styles/components/cart.module.css";
import { CartContext } from "../store/cart-context";
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
	const cartItems = (
		<>
			{cartCtx.items.map((item) => (
                <ul>{item.name} {item.amount}</ul>
			))}
		</>
	);
	return (
		<Modal onClickBackdrop={props.onClickCloseBtn}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
			</div>
			<div className={styles.actions}>
				<button
					onClick={props.onClickCloseBtn}
					className={styles["button--alt"]}
				>
					Close
				</button>
				{hasItems && <button className={styles.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
