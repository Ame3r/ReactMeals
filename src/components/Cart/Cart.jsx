const Cart = (props) => {
	const cartItems = (
		<ul>
			{[
				{
					id: "m1",
					name: "Sushi",
					amount: 1,
					price: 22.0,
				},
			].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
	return (
		<div>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>39.72</span>
			</div>
			<div className={styles.actions}>
				<button className={styles["button--alt"]}>Close</button>
				<button className={styles.button}>Order</button>
			</div>
		</div>
	);
};

export default Cart;
