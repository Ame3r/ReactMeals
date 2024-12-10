import React from "react";
import styles from "../../styles/components/card.module.css"

const Card = props => {
    return <div className={styles.card}>{props.children}</div>;
}

export default Card;