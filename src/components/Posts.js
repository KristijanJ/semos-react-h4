import React from "react";
import Post from "./Post";
import styles from "../mystyle.module.css";

const Posts = props => {
  return props.postslist.length > 0 ? (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th className={styles.darkBG}>ID</th>
          <th className={styles.darkBG}>Title</th>
          <th className={styles.darkBG}>Post</th>
        </tr>
      </thead>
      <tbody>
        {props.postslist.map((post, id) => <Post key={id} post={post} />)}
      </tbody>
    </table>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Posts;
