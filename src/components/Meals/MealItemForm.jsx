import React from "react";
import InputForm from "../UI/InputForm";
import styles from "../../styles/sections/MealItemForm.module.css"

const MealItemForm = () => {
    return (
        <form className={styles.form}>
            <InputForm label="Amount" input={{id:"amount",min:"1",max:"5",step:"1",type:"number",defaultValue:"1"}} />
            <button>+ Add</button>
</form>
    )
}
export default MealItemForm;