import React from "react";
import styles from "../../styles/layouts/Header.module.css"
import MealsImage from "../../assets/meals.jpg";
import Logo from "../UI/logo";
import CartBtn from "./CartBtn";
const Header = () => {
	return (
		<>
			<header className={styles.header}>
                <Logo/>
                <CartBtn/>
            </header>
            <div className={styles['meal-image']}>
                <img src={MealsImage} alt="A table full of delicious meals" />
            </div>
		</>
	);
};

export default Header;
