import React from "react";
import styles from "../mystyle.module.css";

const Post = props => {
  return (
    <tr className={styles.tableRow}>
      <td className={`${styles.tableData} ${styles.alignCenter}`}>{props.post.id}</td>
      <td className={styles.tableData}>{props.post.title}</td>
      <td className={styles.tableData}>{props.post.body}</td>
    </tr>
  );
};

export default Post;
