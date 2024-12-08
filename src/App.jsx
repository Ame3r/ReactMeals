import React from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import "./styles/App.css";

function App() {
	return (
		<>
			<Header />
			<main>
				<Meals/>
			</main>
		</>
	);
}

export default App;
