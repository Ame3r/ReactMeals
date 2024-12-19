import React,{forwardRef} from "react";
import styles from "../../styles/components/inputform.module.css"

const InputForm = forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
});

export default InputForm;