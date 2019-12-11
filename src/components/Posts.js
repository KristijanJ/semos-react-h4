import React from "react";
import Post from "./Post";
import styles from "../mystyle.module.css";

const Posts = props => {
  return props.postslist.length > 0 ? (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Title</th>
            <th className={styles.tableHeader}>Post</th>
          </tr>
        </thead>
        <tbody>
          {props.postslist.map((post, id) => (
            <Post key={id} post={post} />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className={styles.loading}>
      <h2>Loading...</h2>
    </div>
  );
};

export default Posts;
