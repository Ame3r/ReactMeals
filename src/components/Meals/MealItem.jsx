import React from "react";
import styles from "../../styles/sections/MealItem.module.css"
import MealItemForm from "../Meals/MealItemForm"

const MealItem = props => {
    return (
			<li className={styles.meal}>
			<div>
					<h3 className={styles.name}>{props.name}</h3>
					<p className={styles.description}>{props.description}</p>
					<span className={styles.price}>{`$${props.price}`}</span>
				</div>
				<div><MealItemForm/></div>
			</li>
		);
}

export default MealItem;