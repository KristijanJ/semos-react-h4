import React from "react";
import styles from "../mystyle.module.css";

const Photo = props => {
  return (
    <tr className={styles.tableRow}>
      <td className={`${styles.tableData} ${styles.alignCenter}`}>
        {props.photo.id}
      </td>
      <td className={styles.tableData}>{props.photo.title}</td>
      <td className={`${styles.tableData} ${styles.imageHolder}`}>
        <img
          onClick={() => props.openPhoto(props.photo.url)}
          src={props.photo.thumbnailUrl}
          alt={props.photo.title}
        />
      </td>
    </tr>
  );
};

export default Photo;
