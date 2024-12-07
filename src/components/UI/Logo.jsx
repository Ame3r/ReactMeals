import React from "react";
import LogoImage from "../../assets/food-svgrepo-com.svg"
import styles from "../../styles/components/logo.module.css"
const Logo = () => {
    return(
        <a className={styles.logo} href="/">
            <img src={LogoImage} alt="React Meals Logo" />
            <span>ReactMeals</span>
        </a>
    )
}

export default Logo;