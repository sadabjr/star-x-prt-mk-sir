import React from "react";
import styles from "./style.css";

const InputControls = (props) => {
    return (
        <div className={styles.container}>
          {props.label && <label>{props.label}</label>}
          <input type="text" {...props} />
        </div>
      );
}

export default InputControls