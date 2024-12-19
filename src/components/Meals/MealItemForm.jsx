import React, { useState, useRef } from "react";
import InputForm from "../UI/InputForm";
import styles from "../../styles/sections/MealItemForm.module.css";

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();
	const formSubmissionHandler = (e) => {
		e.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;
		if (enteredAmount.trim().length === 0) {
			setAmountIsValid(false);
			return;
        }
		setAmountIsValid(true);
		props.onAddToCart(enteredAmountNumber);
		amountInputRef.current.value = "1"
	};
	return (
		<form className={styles.form} onSubmit={formSubmissionHandler}>
			<InputForm
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount",
					min: "1",
					max: "10",
					step: "1",
					type: "number",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
			{!amountIsValid && (
				<p
					style={{
						color: "rgb(146, 50, 12)",
						fontStyle: "italic",
						padding: "0.2rem",
						fontWeight: "500",
					}}
				>
					Please enter a value from 1 to 10.
				</p>
			)}
		</form>
	);
};
export default MealItemForm;
