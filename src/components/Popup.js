import React from "react";
import styles from "../mystyle.module.css";

const Popup = props => {
  return (
    <div className={styles.popup}>
      <button onClick={props.closePhoto} className={styles.closePopup}>
        &times;
      </button>
      <div className={styles.popupContainer}>
        <img src={props.photoUrl} alt="Popup" />
      </div>
    </div>
  );
};

export default Popup;
