import React from "react";
import styles from "../../styles/sections/MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>Delicious Food, Delivered to You</h2>
            <p>Chose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chef!</p>
        </section>
    )
}

export default MealsSummary;