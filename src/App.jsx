import React, {useState} from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import "./styles/App.css";

function App() {
	const [showCart, setShowCart] = useState(true);
	
	const showCartHandler  = () => {
		setShowCart(true);
	}
	const closeCartHandler  = () => {
		setShowCart(false);
	}
	return (
		<>
			<Header onClickCartBtn={showCartHandler} />
			{showCart && <Cart onClickCloseBtn={closeCartHandler} />}
			<main>
				<Meals/>
			</main>
		</>
	);
}

export default App;
