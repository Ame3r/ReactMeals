import React from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import "./styles/App.css";

function App() {
	return (
		<>
			<Header/>
			<Cart/>
			<main>
				<Meals/>
			</main>
		</>
	);
}

export default App;
