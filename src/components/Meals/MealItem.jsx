import React, { useContext } from "react";
import { CartContext } from "../store/cart-context";
import styles from "../../styles/sections/MealItem.module.css";
import MealItemForm from "../Meals/MealItemForm";

const MealItem = (props) => {
	const cartCtx = useContext(CartContext);
	const addToCartHandler = (amount) => {
		const item = {
			id: props.id,
			name: props.name,
			price: props.price,
			amount: amount,
		};
		cartCtx.addItems(item);
	};
	return (
		<li className={styles.meal}>
			<div>
				<h3 className={styles.name}>{props.name}</h3>
				<p className={styles.description}>{props.description}</p>
				<span className={styles.price}>{`$${props.price}`}</span>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
