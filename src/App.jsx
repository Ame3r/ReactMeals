import React, { useState } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Footer from "./components/Layouts/Footer";
import Cart from "./components/Cart/Cart";
import "./styles/App.css";

function App() {
	const [showCart, setShowCart] = useState(false);

	const showCartHandler = () => {
		setShowCart(true);
	};
	const closeCartHandler = () => {
		setShowCart(false);
	};
	return (
		<>
			<Header onClickCartBtn={showCartHandler} />
			{showCart && <Cart onClickCloseBtn={closeCartHandler} />}
			<main>
				<Meals />
			</main>
			<Footer />
		</>
	);
}

export default App;
