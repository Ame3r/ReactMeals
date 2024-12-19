import React,{useRef} from "react";
import InputForm from "../UI/InputForm";
import styles from "../../styles/sections/MealItemForm.module.css"

const MealItemForm = () => {
    const amountInputRef = useRef();
    const formSubmissionHandler = e => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        console.log(enteredAmount)
    }
    return (
        <form className={styles.form} onSubmit={formSubmissionHandler}>
            <InputForm useRef={amountInputRef} label="Amount" input={{id:"amount",min:"1",max:"5",step:"1",type:"number",defaultValue:"1"}} />
            <button>+ Add</button>
</form>
    )
}
export default MealItemForm;